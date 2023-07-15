const { Router } = require('express');
const config = require('config');
const bcrypt = require('bcrypt');
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
    template: 'reset-forgotten-password',
    context: { link: `${clientUrl}/#/forgot/${session.id}`, userName },
  });

  return res.status(200).json({ message: 'Email successfully sended' });
};

const resetPassword = async (req, res) => {
  const { password, id } = req.body;
  try {
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

    const user = await User.findByPk(session.userId);
    const userName = user.firstName || 'USER';

    const hashedPassword = await bcrypt.hash(password, 10);
    await user.update({ password: hashedPassword });

    await sendEmail({
      to: user.email,
      subject: 'Successful Password Reset - HelpMeDude!',
      template: 'successful-reset-password',
      context: { userName },
    });

    await ForgotSession.destroy({ where: { id } });

    return res
      .status(200)
      .json({ message: 'Password has been successfully reset' });
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong', error });
  }
};

module.exports = Router()
  .get('/:id', checkForgotSession)
  .post('/:id', resetPassword)
  .post('/', sendForgotEmail);
