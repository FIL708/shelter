module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('address', [
      {
        city: 'Warsaw',
        country: 'Poland',
      },
      {
        city: 'Wroclaw',
        country: 'Poland',
      },
      {
        city: 'Gdansk',
        country: 'Poland',
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('address', null, {});
  },
};
