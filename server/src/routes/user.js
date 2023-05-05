const { Router } = require('express');
const { User } = require('../models');

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

module.exports = Router().get('/', getAllUsers);
