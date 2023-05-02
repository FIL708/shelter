module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('user_adoptions', [
      { userID: 1, adoptionID: 1 },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('user_adoptions', null, {});
  },
};
