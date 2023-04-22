const { Router } = require('express');
const passport = require('passport');

module.exports = Router()
  .post('/login', passport.authenticate('local'), (req, res) =>
    res.status(200).json({ message: 'Success!' }),
  )
  .post('/register', (req, res) => console.log(req, res));
