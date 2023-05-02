module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Filip',
        lastName: 'Zebrowski',
        email: 'filip.zebrowski4013@gmail.com',
        password:
          '$2b$10$0ceY9JU6gNkU/aXa8Gr8hejCAAXTK8MPUGTFBppj..D6pawA2fBMu',
        role: 'admin',
        phone: '123123123',
        addressID: 2,
        avatar:
          'https://lh3.googleusercontent.com/a/AGNmyxYxkm7PS_WLiv2WW2IklYdph4eT-w98DMyPdVM=s96-c',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('Users', null, {});
  },
};
