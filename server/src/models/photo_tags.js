const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PhotoTags extends Model {
    static associate(models) {
      PhotoTags.belongsTo(models.photo, { foreignKey: 'photoID' });
      PhotoTags.belongsTo(models.tag, { foreignKey: 'tagID' });
    }
  }
  PhotoTags.init(
    {
      tagID: DataTypes.INTEGER,
      photoID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'photo_tags',
    },
  );
  return PhotoTags;
};
