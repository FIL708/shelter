'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Filip',
        lastName: 'Zebrowski',
        email: 'filip.zebrowski4013@gmail.com',
        password:
          '$2b$10$0ceY9JU6gNkU/aXa8Gr8hejCAAXTK8MPUGTFBppj..D6pawA2fBMu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
