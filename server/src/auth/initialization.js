const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const config = require('config');
const { User } = require('../models');

const sessionSecret = config.get('session');

function passportInitialization() {
  const authUser = async (email, password, done) => {
    console.log(email, password);

    const user = await User.findOne({ where: { email } });
    if (!user) return done(null, false);

    if (user.password === password) {
      return done(null, user);
    }
    return done(null, false);
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authUser));

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  const sessionMiddleware = session({
    secret: sessionSecret.key,
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
