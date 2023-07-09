const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ForgotSession extends Model {
    static associate(models) {
      // define association here
    }
  }
  ForgotSession.init(
    {
      userId: DataTypes.NUMBER,
      expiredDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'forgot-session',
    },
  );
  return ForgotSession;
};
