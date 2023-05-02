const { Model } = require('sequelize');

module.exports = (sequelize, { STRING }) => {
  class Photo extends Model {
    static associate(models) {
      Photo.belongsTo(models.user, { foreignKey: 'photoID' });
      Photo.belongsToMany(models.tag, {
        through: 'photo_tags',
        foreignKey: 'photoID',
      });
    }
  }
  Photo.init(
    {
      url: STRING,
    },
    {
      sequelize,
      modelName: 'photo',
    },
  );
  return Photo;
};
