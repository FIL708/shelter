'use strict';

module.exports = {
  async up(queryInterface, {INTEGER, STRING, TEXT,DATE}) {
    await queryInterface.createTable('Adoptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      name: {
        type: STRING
      },
      description: {
        type: TEXT
      },
      shortDescription: {
        type: STRING
      },
      likes: {
        type: INTEGER
      },
      views: {
        type: INTEGER
      },
      species: {
        type: STRING
      },
      createdAt: {
        allowNull: false,
        type: DATE
      },
      updatedAt: {
        allowNull: false,
        type: DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Adoptions');
  }
};