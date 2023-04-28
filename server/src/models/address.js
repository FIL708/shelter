const { Model } = require('sequelize');

module.exports = (sequelize, { STRING }) => {
  class Address extends Model {
    static associate(models) {
      Address.hasMany(models.user);
      Address.hasMany(models.adoption);
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
