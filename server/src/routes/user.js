const { Router } = require('express');
const { User, Address } = require('../models');

const getAllUsers = async (req, res) => {
  if (!req.session.passport || req.session.passport.user.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    if (!users) {
      return res.status(404).json({ message: 'Users not found' });
    }

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong', error });
  }
};

const getOneUser = async (req, res) => {
  const { id } = req.params;
  if (!req.session.passport) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
  if (req.session.passport.user.role !== 'admin') {
    if (req.session.passport.user.id.toString() !== id.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
  }

  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password', 'addressId'] },
      include: { model: Address, as: 'address' },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong', error });
  }
};

const updateUserProfile = async (req, res) => {
  const { id } = req.params;
  const { address, role, ...userData } = req.body;

  // if (!req.session.passport) {
  //   return res.status(403).json({ message: 'Unauthorized' });
  // }
  // if (req.session.passport.user.role !== 'admin') {
  //   if (req.session.passport.user.id.toString() !== id.toString()) {
  //     return res.status(403).json({ message: 'Unauthorized' });
  //   }
  // }

  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password', 'addressId'] },
      include: { model: Address, as: 'address' },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (userData) {
      await User.update(userData, {
        where: { id },
        fields: ['firstName', 'lastName', 'phone', 'avatar', 'birthday'],
      });
    }

    if (address) {
      const location = await Address.findOne({ where: { city: address.city } });
      if (!location) {
        const newLocation = await Address.create(address);
        await user.update({ addressId: newLocation.id }, { where: { id } });
      }
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong', error });
  }
};

module.exports = Router()
  .get('/', getAllUsers)
  .get('/:id', getOneUser)
  .put('/:id', updateUserProfile);
