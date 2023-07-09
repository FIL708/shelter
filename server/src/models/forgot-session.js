const { Model } = require('sequelize');

module.exports = (sequelize, { UUIDV4, INTEGER, DATE }) => {
  class ForgotSession extends Model {
    static associate(models) {
      // define association here
    }
  }
  ForgotSession.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: UUIDV4,
      },
      userId: INTEGER,
      expiredDate: {
        type: DATE,
        defaultValue: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      },
    },
    {
      sequelize,
      modelName: 'ForgotSession',
    },
  );
  return ForgotSession;
};
