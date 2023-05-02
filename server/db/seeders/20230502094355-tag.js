module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Tags', [
      { name: 'main' },
      { name: 'cat' },
      { name: 'dog' },
      { name: 'event' },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('Tags', null, {});
  },
};
