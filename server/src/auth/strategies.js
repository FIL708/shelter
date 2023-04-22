const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');

const authUser = async (email, password, done) => {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) return done(null, false, user);

    if (user.password === password) {
      return done(null, user);
    }
    return done(null, false, user);
  } catch (error) {
    return done(error);
  }
};

const localStrategy = new LocalStrategy({ usernameField: 'email' }, authUser);

module.exports = { localStrategy };
