const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcrypt');
const config = require('config');
const { User } = require('../models');

const serverUrl = config.get('serverUrl');
const googleClientID = config.get('googleClientID');
const googleClientSecret = config.get('googleClientSecret');

const localAuth = async (email, password, done) => {
  try {
    const user = await User.findOne({ where: { email } });
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (user && password && isValidPassword) {
      return done(null, user);
    }

    return done(null, false, user);
  } catch (error) {
    return done(error);
  }
};

const googleAuth = (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  return done(null, '');
};

const localStrategy = new LocalStrategy({ usernameField: 'email' }, localAuth);

const googleStrategy = new GoogleStrategy(
  {
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: `${serverUrl}/api/auth/google/callback`,
  },
  googleAuth,
);

module.exports = { localStrategy, googleStrategy };
