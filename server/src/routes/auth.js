const { Router } = require('express');
const passport = require('passport');

module.exports = Router()
  .post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/login',
      failureMessage: true,
    }),
  )
  .post('/register', (req, res) => console.log(req, res));
