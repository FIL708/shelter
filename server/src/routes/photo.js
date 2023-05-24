const { Router } = require('express');
const { Photo, Tag } = require('../models');

const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.findAll({
      attributes: { exclude: ['photoId'] },
      include: [
        {
          model: Tag,
          as: 'tags',
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (!photos) {
      return res.status(404).json({ message: 'Photos not found' });
    }
    res.status(200).json(photos);
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong', error });
  }
};

module.exports = Router().get('/', getAllPhotos);
