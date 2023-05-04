module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('user_adoptions', [
      { userId: 1, adoptionId: 1 },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('user_adoptions', null, {});
  },
};
