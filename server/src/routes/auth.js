const { Router } = require('express');
const passport = require('passport');
const { User } = require('../models');

module.exports = Router()
  .post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json({ message: 'Success!' });
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

      await User.create({ email, password });
      res
        .status(200)
        .json({ message: 'Account has been successfully created' });
    } catch (error) {
      return res.status(500).json({ message: 'Something goes wrong', error });
    }
  });
