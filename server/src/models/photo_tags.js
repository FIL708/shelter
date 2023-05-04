const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PhotoTags extends Model {
    static associate(models) {
      PhotoTags.belongsTo(models.Photo, { foreignKey: 'photoId' });
      PhotoTags.belongsTo(models.Tag, { foreignKey: 'tagId' });
    }
  }
  PhotoTags.init(
    {
      tagId: DataTypes.INTEGER,
      photoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'photo_tags',
    },
  );
  return PhotoTags;
};
