const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const config = require('config');

function passportInitialization() {
  console.log(passport, LocalStrategy, session, config);

  passport.serializeUser((user, done) => done(null, user));
  passport.deSerializeUser((user, done) => done(null, user));
}

module.exports = passportInitialization;
