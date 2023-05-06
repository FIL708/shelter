const { Model } = require('sequelize');

module.exports = (sequelize, { STRING }) => {
  class Opinion extends Model {
    static associate(models) {
      Opinion.belongsTo(models.Adoption, { foreignKey: 'adoptionId' });
      Opinion.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Opinion.init(
    {
      body: STRING,
    },
    {
      sequelize,
      modelName: 'Opinion',
    },
  );
  return Opinion;
};
