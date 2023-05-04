const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserAdoptions extends Model {
    static associate(models) {
      UserAdoptions.belongsTo(models.user, { foreignKey: 'userId' });
      UserAdoptions.belongsTo(models.adoption, { foreignKey: 'adoptionId' });
    }
  }
  UserAdoptions.init(
    {
      userId: DataTypes.INTEGER,
      adoptionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'user_adoptions',
    },
  );
  return UserAdoptions;
};
