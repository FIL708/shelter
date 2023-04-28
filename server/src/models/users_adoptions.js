'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserAdoptions extends Model {
    static associate(models) {
      UserAdoptions.belongsTo(models.user, { foreignKey: 'userID' });
      UserAdoptions.belongsTo(models.adoption, { foreignKey: 'adoptionID' });
    }
  }
  UserAdoptions.init(
    {
      userID: DataTypes.INTEGER,
      adoptionID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'user_adoptions',
    },
  );
  return UserAdoptions;
};
