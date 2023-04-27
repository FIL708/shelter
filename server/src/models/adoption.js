'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adoption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Adoption.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      shortDescription: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      views: DataTypes.INTEGER,
      species: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Adoption',
    },
  );
  return Adoption;
};
