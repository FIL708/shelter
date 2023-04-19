const { Router } = require('express');
const users = require('../users.json');

const getAllUsers = (req, res) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.export = Router().get('/', getAllUsers);
