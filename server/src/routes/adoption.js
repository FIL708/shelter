const { Router } = require('express');
const { Adoption, Photo, Tag, Address, Opinion, User } = require('../models');

const getAllAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.findAll({
      attributes: {
        exclude: ['addressId', 'updatedAt', 'deletedAt', 'description'],
      },
      include: [
        { model: Address, as: 'address' },
        {
          model: Photo,
          as: 'photos',
          attributes: ['url'],
          include: {
            model: Tag,
            as: 'tags',
            attributes: [],
            where: { name: 'main' },
            through: {
              attributes: [],
            },
          },
        },
      ],
    });

    if (!adoptions) {
      return res.status(404).json({ message: 'Adoptions not found' });
    }

    return res.status(200).json(adoptions);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const getOneAdoption = async (req, res) => {
  const { id } = req.params;
  try {
    const adoption = await Adoption.findByPk(id, {
      attributes: {
        exclude: ['addressId', 'updatedAt', 'deletedAt'],
      },
      include: [
        { model: Address, as: 'address' },
        { model: Photo, as: 'photos' },
        {
          model: Opinion,
          as: 'opinions',
          include: {
            model: User,
            as: 'user',
            attributes: ['firstName', 'lastName', 'avatar'],
          },
        },
      ],
      order: [[{ model: Opinion, as: 'opinions' }, 'updatedAt', 'DESC']],
    });

    if (!adoption) {
      return res.status(404).json({ message: 'Adoption not found' });
    }

    return res.status(200).json(adoption);
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong', error });
  } finally {
    await Adoption.increment('views', { where: { id } });
  }
};

module.exports = Router().get('/', getAllAdoptions).get('/:id', getOneAdoption);
