const { Model } = require('sequelize');

module.exports = (sequelize, { INTEGER, STRING, TEXT }) => {
  class Adoption extends Model {
    static associate(models) {
      Adoption.belongsTo(models.address, { foreignKey: 'addressID' });
      Adoption.belongsToMany(models.user, {
        through: 'user_adoptions',
        foreignKey: 'adoptionID',
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
      modelName: 'adoption',
    },
  );
  return Adoption;
};
