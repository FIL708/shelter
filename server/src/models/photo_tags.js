const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PhotoTags extends Model {
    static associate(models) {
      PhotoTags.belongsTo(models.photo, { foreignKey: 'photoId' });
      PhotoTags.belongsTo(models.tag, { foreignKey: 'tagId' });
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
