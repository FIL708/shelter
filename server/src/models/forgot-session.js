const { Model } = require('sequelize');

module.exports = (sequelize, { UUIDV4, UUID, INTEGER, DATE }) => {
  class ForgotSession extends Model {
    static associate(models) {
      ForgotSession.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  ForgotSession.init(
    {
      id: {
        allowNull: false,
        defaultValue: UUIDV4,
        primaryKey: true,
        type: UUID,
      },
      userId: INTEGER,
      expirationDate: {
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
