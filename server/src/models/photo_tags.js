'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class photo_tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  photo_tags.init(
    {
      tagID: DataTypes.INTEGER,
      photoID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'photo_tags',
    },
  );
  return photo_tags;
};
