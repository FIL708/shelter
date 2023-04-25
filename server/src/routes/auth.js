const { Router } = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const config = require('config');
const { User } = require('../models');

const clientUrl = config.get('clientUrl');

module.exports = Router()
  .post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).redirect(`${clientUrl}/`);
  })
  .get('/logout', (req, res, next) => {
    req.logout((error) => {
      if (error) return next(error);
      return res.redirect(`${clientUrl}/`);
    });
  })
  .post('/register', async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(422).json({ message: 'Unprocessable entity' });
      }

      const userFounded = await User.findOne({ where: { email } });
      if (userFounded) {
        return res.status(409).json({ message: 'Account already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({ email, password: hashedPassword });
      res
        .status(200)
        .json({ message: 'Account has been successfully created' });
    } catch (error) {
      return res.status(500).json({ message: 'Something goes wrong', error });
    }
  })
  .get(
    '/google',
    passport.authenticate('google', {
      scope: ['https://www.googleapis.com/auth/userinfo.email'],
    }),
  )
  .get(
    '/google/redirect',
    passport.authenticate('google', {
      successRedirect: `${clientUrl}/`,
      failureRedirect: `${clientUrl}/signup`,
    }),
  )
  .get('/facebook', passport.authenticate('facebook', { scope: ['email'] }))
  .get(
    '/facebook/redirect',
    passport.authenticate('facebook', {
      successRedirect: `${clientUrl}/`,
      failureRedirect: `${clientUrl}/signup`,
    }),
  );
