const { Router } = require('express');
const { Adoption } = require('../models');

const getAllAdoptions = async (req, res) => {
  const adoptions = await Adoption.findAll();
  return res.status(200).json(adoptions);
};
const getOneAdoption = (req, res) => {
  console.log(Adoption, req, res);
};

module.exports = Router().get('/', getAllAdoptions).get('/:id', getOneAdoption);
