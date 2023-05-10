const { Model } = require('sequelize');

module.exports = (sequelize, { STRING }) => {
  class Address extends Model {
    static associate(models) {
      Address.hasMany(models.User, { foreignKey: 'addressId' });
      Address.hasMany(models.Adoption, { foreignKey: 'addressId' });
    }
  }
  Address.init(
    {
      city: STRING,
      country: STRING,
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Address',
    },
  );
  return Address;
};
