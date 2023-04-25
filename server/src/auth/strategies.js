const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcrypt');
const passwordGenerator = require('generate-password');
const config = require('config');
const { User } = require('../models');

const serverUrl = config.get('serverUrl');
const googleClientID = config.get('googleClientID');
const googleClientSecret = config.get('googleClientSecret');

const localVerify = async (email, password, done) => {
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

const googleVerify = async (accessToken, refreshToken, profile, done) => {
  try {
    const email = profile.emails[0].value;
    const avatar = profile.photos[0].value;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      const password = passwordGenerator.generate({
        length: 12,
        numbers: true,
      });
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(`Sending mail with password to user: ${password}`);

      const newUser = await User.create({
        email,
        avatar,
        password: hashedPassword,
      });
      return done(false, newUser);
    }

    return done(false, user);
  } catch (error) {
    return done(error);
  }
};

const localStrategy = new LocalStrategy(
  { usernameField: 'email' },
  localVerify,
);

const googleStrategy = new GoogleStrategy(
  {
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: `${serverUrl}/api/auth/google/redirect`,
  },
  googleVerify,
);

module.exports = { localStrategy, googleStrategy };
