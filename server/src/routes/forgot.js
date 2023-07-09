const { Router } = require('express');
const { User, ForgotSession } = require('../models');

const checkForgotSession = (req, res) => {
  const { id } = req.params;
  return res.status(200).json({ id });
};

const sendForgotEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(422).json({ message: 'Invalid data provided' });

  const user = await User.findOne({ where: { email } });

  if (!user) return res.status(404).json({ message: 'User not found' });

  await ForgotSession.create({ userId: user.id });

  return res.status(200).json({ message: 'Email successfully sended' });
};

module.exports = Router()
  .get('/:id', checkForgotSession)
  .post('/', sendForgotEmail);
