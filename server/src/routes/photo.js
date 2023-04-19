const { Router } = require('express');
const photos = require('../photos.json');

const getAllPhotos = (req, res) => {
  try {
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = Router().get('/', getAllPhotos);
