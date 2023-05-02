const { Model } = require('sequelize');

module.exports = (sequelize, { STRING, INTEGER }) => {
  class Photo extends Model {
    static associate(models) {
      // define association here
    }
  }
  Photo.init(
    {
      url: STRING,
      tagID: INTEGER,
      adoptionID: INTEGER,
    },
    {
      sequelize,
      modelName: 'photo',
    },
  );
  return Photo;
};
