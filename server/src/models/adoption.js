'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, { INTEGER, STRING, TEXT, DATE }) => {
  class Adoption extends Model {
    static associate(models) {
      // define association here
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
