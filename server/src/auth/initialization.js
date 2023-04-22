const passport = require('passport');
const session = require('express-session');
const config = require('config');
const { localStrategy } = require('./strategies.js');

const sessionSecret = config.get('session');
console.log(sessionSecret.key);

function passportInitialization() {
  passport.use(localStrategy);

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  const sessionMiddleware = session({
    secret: sessionSecret.key,
    saveUninitialized: false,
    resave: false,
  });

  const authMiddleware = passport.initialize();
  passport.session();

  return [sessionMiddleware, authMiddleware];
}

module.exports = passportInitialization;
