const { Model } = require('sequelize');

module.exports = (sequelize, { STRING, DATE }) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.address, { foreignKey: 'addressID' });
      User.belongsToMany(models.adoption, {
        through: 'user_adoptions',
        foreignKey: 'userID',
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
      modelName: 'user',
    },
  );
  return User;
};
