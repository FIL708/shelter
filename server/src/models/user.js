'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, { STRING, DATE }) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Address);
    }
  }
  User.init(
    {
      firstName: STRING,
      lastName: STRING,
      role: STRING,
      email: STRING,
      phone: STRING,
      password: STRING,
      birthday: DATE,
    },
    {
      sequelize,
      modelName: 'user',
    },
  );
  return User;
};
