const { Model } = require('sequelize');

module.exports = (sequelize, { STRING }) => {
  class Photo extends Model {
    static associate(models) {
      Photo.belongsTo(models.Adoption, { foreignKey: 'adoptionId' });
      Photo.belongsToMany(models.Tag, {
        through: models.photo_tags,
        foreignKey: 'photoId',
        as: 'tags',
      });
    }
  }
  Photo.init(
    {
      url: { type: STRING, validate: { isUrl: true } },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Photo',
    },
  );
  return Photo;
};
