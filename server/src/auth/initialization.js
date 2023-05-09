const passport = require('passport');
const session = require('express-session');
const JsonStore = require('express-session-json')(session);
const config = require('config');
const {
  localStrategy,
  googleStrategy,
  facebookStrategy,
} = require('./strategies.js');

const sessionKey = config.get('sessionKey');

function passportInitialization() {
  passport.use(localStrategy);
  passport.use(googleStrategy);
  passport.use(facebookStrategy);

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  const sessionMiddleware = session({
    secret: sessionKey,
    saveUninitialized: false,
    resave: false,
    store: new JsonStore(),
  });

  const authMiddleware = passport.initialize();
  passport.session();

  return [sessionMiddleware, authMiddleware];
}

module.exports = passportInitialization;
