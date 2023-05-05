const { Router } = require('express');
const { Adoption, Photo } = require('../models');

const getAllAdoptions = async (req, res) => {
  const adoptions = await Adoption.findAll({
    attributes: { exclude: ['adoptionId'] },
    include: [{ model: Photo, as: 'photos' }],
  });
  return res.status(200).json(adoptions);
};
const getOneAdoption = (req, res) => {
  console.log(Adoption, req, res);
};

module.exports = Router().get('/', getAllAdoptions).get('/:id', getOneAdoption);
