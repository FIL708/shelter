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
      {
        firstName: 'John',
        lastName: 'Adams',
        email: 'testagentjohn@gmail.com',
        password:
          '$2b$10$vbfgYP.21qKrwNTNRUC/MeyZ/FlIxuk8dSea1AsmL3PZw/RsITeju',
        role: 'user',
        phone: '123123123',
        addressID: 1,
        avatar:
          'https://images.unsplash.com/photo-1627161684850-52a7d958f8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1118&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('Users', null, {});
  },
};
