const { Router } = require('express');
const bcrypt = require('bcrypt');
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

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong', error });
  }
};

const updateUserProfile = async (req, res) => {
  const { id } = req.params;
  const { password, address, role, ...userData } = req.body;

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
      } else {
        await user.update({ addressId: location.id }, { where: { id } });
      }
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.update({ password: hashedPassword }, { where: { id } });
    }

    return res
      .status(200)
      .json({ message: 'User profile successfully updated' });
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong', error });
  }
};

const deleteUser = async (req, res) => {
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
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await User.destroy({ where: { email: user.email } });
    return res
      .status(200)
      .json({ messages: `User ID:${id} successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong', error });
  }
};

module.exports = Router()
  .get('/', getAllUsers)
  .get('/:id', getOneUser)
  .put('/:id', updateUserProfile)
  .delete('/:id', deleteUser);
