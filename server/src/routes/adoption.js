const { Router } = require('express');
const pets = require('../pets.json');

const getAllAdoptions = (req, res) => {
  try {
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: 'error', error });
  }
};

module.exports = Router().get('/', getAllAdoptions);
