const { Router } = require('express');
const { Opinion } = require('../models');

const updateOpinion = async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  try {
    if (!req.session.passport) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    if (req.session.passport.user.role !== 'admin') {
      if (req.session.passport.user.id.toString() !== id.toString()) {
        return res.status(403).json({ message: 'Unauthorized' });
      }
    }

    const opinion = await Opinion.findByPk(id);

    if (!opinion) {
      return res.status(404).json({ message: 'Opinion not found' });
    }
    if (!body) {
      return res.status(422).json({ message: 'Unprocessable entity' });
    }

    await opinion.update({ body });
    return res.status(200).json({ message: 'Opinion successfully updated' });
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong', error });
  }
};

module.exports = Router().put('/:id', updateOpinion);
