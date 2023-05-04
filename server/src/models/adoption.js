const { Model } = require('sequelize');

module.exports = (sequelize, { INTEGER, STRING, TEXT }) => {
  class Adoption extends Model {
    static associate(models) {
      Adoption.hasMany(models.Photo, { foreignKey: 'photoId' });
      Adoption.belongsTo(models.Address, { foreignKey: 'addressId' });
      Adoption.belongsToMany(models.User, {
        through: 'user_adoptions',
        foreignKey: 'adoptionId',
      });
    }
  }
  Adoption.init(
    {
      name: STRING,
      description: TEXT,
      shortDescription: STRING,
      likes: INTEGER,
      views: INTEGER,
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
