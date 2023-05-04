const { Model } = require('sequelize');

module.exports = (sequelize, { STRING, DATE }) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Address, { foreignKey: 'addressId' });
      User.belongsToMany(models.Adoption, {
        through: 'user_adoptions',
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      firstName: STRING,
      lastName: STRING,
      role: STRING,
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
      paranoid: true,
      modelName: 'User',
    },
  );
  return User;
};
