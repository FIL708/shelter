module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Addresses', [
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
    queryInterface.bulkDelete('Addresses', null, {});
  },
};
