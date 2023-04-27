'use strict';

module.exports = {
  async up(queryInterface, { INTEGER, STRING, DATE }) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      firstName: {
        type: STRING,
      },
      lastName: {
        type: STRING,
      },
      role: {
        type: STRING,
      },
      email: {
        type: STRING,
        unique: true,
      },
      phone: {
        type: STRING,
      },
      password: {
        type: STRING,
      },
      avatar: {
        type: STRING,
      },
      birthday: {
        type: DATE,
      },
      createdAt: {
        allowNull: false,
        type: DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DATE,
      },
      addressID: {
        type: INTEGER,
        references: {
          model: 'Address',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  },
};
