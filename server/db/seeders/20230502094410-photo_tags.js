module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('photo_tags', [
      { photoID: 1, tagID: 1 },
      { photoID: 6, tagID: 1 },
      { photoID: 11, tagID: 1 },
      { photoID: 16, tagID: 1 },
      { photoID: 21, tagID: 1 },
      { photoID: 26, tagID: 1 },
      { photoID: 31, tagID: 1 },
      { photoID: 36, tagID: 1 },
      { photoID: 41, tagID: 1 },
      { photoID: 46, tagID: 1 },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('photo_tags', null, {});
  },
};
