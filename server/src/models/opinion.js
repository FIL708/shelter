const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Opinion extends Model {
    static associate(models) {
      Opinion.belongsTo(models.Adoption, { foreignKey: 'adoptionId' });
    }
  }
  Opinion.init(
    {
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Opinion',
    },
  );
  return Opinion;
};
