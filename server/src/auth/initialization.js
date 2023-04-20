const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const config = require('config');

function passportInitialization() {
  console.log(LocalStrategy, config);

  passport.serializeUser((user, done) => done(null, user));
  passport.deSerializeUser((user, done) => done(null, user));

  const sessionMiddleware = session({
    secret: '',
    name: 'session',
    saveUninitialized: false,
    resave: false,
    cookie: {},
  });

  const authMiddleware = passport.initialize();
  passport.session();

  return [sessionMiddleware, authMiddleware];
}

module.exports = passportInitialization;
