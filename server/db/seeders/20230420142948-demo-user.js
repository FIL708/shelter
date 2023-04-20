'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Filip',
        lastName: 'Zebrowski',
        email: 'filip.zebrowski4013@gmail.com',
        password: "admin4013",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
