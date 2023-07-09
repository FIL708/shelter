const { Router } = require('express');
const { ForgotSession } = require('../models');

const checkForgotSession = (req, res) => {
  const { id } = req.params;
  return res.status(200).json({ id });
};

const sendForgotEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(422).json({ message: 'Invalid data provided' });

  await ForgotSession.create();

  return res.status(200).json({ message: 'Email successfully sended' });
};

module.exports = Router()
  .get('/:id', checkForgotSession)
  .post('/', sendForgotEmail);
