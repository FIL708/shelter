const { Model } = require('sequelize');

module.exports = (sequelize, { STRING, DATE }) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Opinion, { foreignKey: 'userId' });
      User.hasMany(models.ForgotSession, { foreignKey: 'userId' });
      User.belongsTo(models.Address, {
        foreignKey: 'addressId',
        as: 'address',
      });
      User.belongsToMany(models.Adoption, {
        through: models.user_adoptions,
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      firstName: {
        type: STRING,
        defaultValue: '',
      },
      lastName: {
        type: STRING,
        defaultValue: '',
      },
      role: {
        type: STRING,
        defaultValue: 'user',
      },
      email: {
        type: STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phone: STRING,
      avatar: { type: STRING, validate: { isUrl: true } },
      password: STRING,
      birthday: DATE,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
