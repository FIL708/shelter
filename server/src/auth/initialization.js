const passport = require('passport');
const session = require('express-session');
const config = require('config');
const { localStrategy, googleStrategy } = require('./strategies.js');

const sessionKey = config.get('sessionKey');

function passportInitialization() {
  passport.use(localStrategy);
  passport.use(googleStrategy);

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  const sessionMiddleware = session({
    secret: sessionKey,
    saveUninitialized: false,
    resave: false,
  });

  const authMiddleware = passport.initialize();
  passport.session();

  return [sessionMiddleware, authMiddleware];
}

module.exports = passportInitialization;
