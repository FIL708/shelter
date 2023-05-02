const { Model } = require('sequelize');

module.exports = (sequelize, { STRING }) => {
  class Tag extends Model {
    static associate(models) {
      // define association here
    }
  }
  Tag.init(
    {
      name: STRING,
    },
    {
      sequelize,
      modelName: 'tag',
    },
  );
  return Tag;
};
