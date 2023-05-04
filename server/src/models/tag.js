const { Model } = require('sequelize');

module.exports = (sequelize, { STRING }) => {
  class Tag extends Model {
    static associate(models) {
      Tag.belongsToMany(models.Photo, {
        through: 'photo_tags',
        foreignKey: 'tagId',
      });
    }
  }
  Tag.init(
    {
      name: STRING,
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Tag',
    },
  );
  return Tag;
};
