const { Model } = require('sequelize');

module.exports = (sequelize, { INTEGER, STRING, TEXT }) => {
  class Adoption extends Model {
    static associate(models) {
      Adoption.hasMany(models.Photo, {
        foreignKey: 'adoptionId',
        as: 'photos',
      });
      Adoption.hasMany(models.Opinion, {
        foreignKey: 'adoptionId',
        as: 'opinions',
      });
      Adoption.belongsTo(models.Address, {
        foreignKey: 'addressId',
        as: 'address',
      });
      Adoption.belongsToMany(models.User, {
        through: models.user_adoptions,
        foreignKey: 'adoptionId',
      });
    }
  }
  Adoption.init(
    {
      name: STRING,
      description: TEXT,
      shortDescription: TEXT,
      likes: INTEGER,
      views: INTEGER,
      gender: STRING,
      age: INTEGER,
      weight: INTEGER,
      species: STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'Adoption',
    },
  );
  return Adoption;
};
