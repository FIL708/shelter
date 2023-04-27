'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, { STRING }) => {
  class Address extends Model {
    static associate(models) {
      Address.hasMany(models.User, { foreignKey: 'addressID' });
    }
  }
  Address.init(
    {
      city: STRING,
      country: STRING,
    },
    {
      sequelize,
      modelName: 'address',
    },
  );
  return Address;
};
