const { Router } = require('express');
const { User, Address } = require('../models');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['userId', 'password'] },
    });

    if (!users) {
      return res.status(404).json({ message: 'Users not found' });
    }

    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['userId', 'password', 'addressId'] },
      include: { model: Address, as: 'address' },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = Router().get('/', getAllUsers).get('/:id', getOneUser);
