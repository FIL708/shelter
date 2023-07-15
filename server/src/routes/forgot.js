const { Router } = require('express');
const config = require('config');
const { User, ForgotSession } = require('../models');
const sendEmail = require('../utils/send-email.js');

const clientUrl = config.get('clientUrl');

const checkForgotSession = async (req, res) => {
  const { id } = req.params;

  const session = await ForgotSession.findByPk(id);
  if (!session) {
    return res.status(404).json({ message: 'Session not found' });
  }

  if (new Date(session.expirationDate.getTime()) < Date.now()) {
    await ForgotSession.destroy({ where: { id } });
    return res.status(410).json({
      message: 'The password reset request has expired.',
    });
  }

  return res.status(200).json({ id });
};

const sendForgotEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(422).json({ message: 'Invalid data provided' });

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const session = await ForgotSession.create({ userId: user.id });

  const userName = user.firstName || 'USER';

  await sendEmail({
    to: email,
    subject: 'Password Reset Request - HelpMeDude!',
    template: 'forgot',
    context: { link: `${clientUrl}/#/forgot/${session.id}`, userName },
  });

  return res.status(200).json({ message: 'Email successfully sended' });
};

const resetPassword = (req, res) => {
  const { password } = req.body;
  console.log(password);
  return res.status(200).json({ password });
};

module.exports = Router()
  .get('/:id', checkForgotSession)
  .post('/:id', resetPassword)
  .post('/', sendForgotEmail);
