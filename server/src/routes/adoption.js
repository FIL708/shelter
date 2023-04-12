const { Router } = require('express');
const pets = require('../pets.json');

const getAllAdoptions = (req, res) => {
  try {
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: 'error', error });
  }
};
const getOneAdoption = (req, res) => {
  try {
    const [adoption] = pets.filter((pet) => pet.id === req.params.id);
    if (!adoption) {
      return res.status(404).json({ message: 'Adoption not found!' });
    }
    res.status(200).json(adoption);
  } catch (error) {
    res.status(500).json({ message: 'error', error });
  }
};

module.exports = Router().get('/', getAllAdoptions).get('/:id', getOneAdoption);
