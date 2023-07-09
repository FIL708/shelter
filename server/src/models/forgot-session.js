const { Model } = require('sequelize');

module.exports = (sequelize, { NUMBER, DATE }) => {
  class ForgotSession extends Model {
    static associate(models) {
      // define association here
    }
  }
  ForgotSession.init(
    {
      userId: NUMBER,
      expiredDate: DATE,
    },
    {
      sequelize,
      modelName: 'ForgotSession',
    },
  );
  return ForgotSession;
};
