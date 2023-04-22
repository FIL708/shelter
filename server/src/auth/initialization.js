const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const config = require('config');
const { User } = require('../models');

const sessionSecret = config.get('session');

function passportInitialization() {
  const authUser = async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) return done(null, false);

      if (user.password === password) {
        return done(null, user);
      }
      return done(null, false);
    } catch (error) {
      return done(error);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authUser));

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
