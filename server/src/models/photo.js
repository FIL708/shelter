const { Model } = require('sequelize');

module.exports = (sequelize, { STRING }) => {
  class Photo extends Model {
    static associate(models) {
      Photo.belongsTo(models.adoption, { foreignKey: 'adoptionId' });
      Photo.belongsToMany(models.tag, {
        through: 'photo_tags',
        foreignKey: 'photoId',
      });
    }
  }
  Photo.init(
    {
      url: { type: STRING, validate: { isUrl: true } },
    },
    {
      sequelize,
      modelName: 'photo',
    },
  );
  return Photo;
};
