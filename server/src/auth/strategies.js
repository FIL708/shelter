const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('../models');

const authUser = async (email, password, done) => {
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

const localStrategy = new LocalStrategy({ usernameField: 'email' }, authUser);

module.exports = { localStrategy };
