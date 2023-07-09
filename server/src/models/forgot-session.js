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
      expiredDate: { type: DATE, defaultValue: Date.now() + 43200 },
    },
    {
      sequelize,
      modelName: 'ForgotSession',
    },
  );
  return ForgotSession;
};
