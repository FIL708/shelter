const { Router } = require('express');
const { photo } = require('../models');

const getAllPhotos = async (req, res) => {
  console.log(photo);

  const photos = await photo.findAll();
  console.log(photos);

  if (!photos) {
    return res.status(404).json({ message: 'Photos not found' });
  }
  res.status(200).json(photos);
};

module.exports = Router().get('/', getAllPhotos);
