'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, { INTEGER, STRING, TEXT }) => {
  class Adoption extends Model {
    static associate(models) {
      Adoption.belongsTo(models.Address, { foreignKey: 'addressID' });
    }
  }
  Adoption.init(
    {
      name: STRING,
      description: TEXT,
      shortDescription: STRING,
      likes: INTEGER,
      views: INTEGER,
      species: STRING,
    },
    {
      sequelize,
      modelName: 'adoption',
    },
  );
  return Adoption;
};
