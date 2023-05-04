module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('photo_tags', [
      { photoId: 1, tagId: 1 },
      { photoId: 6, tagId: 1 },
      { photoId: 11, tagId: 1 },
      { photoId: 16, tagId: 1 },
      { photoId: 21, tagId: 1 },
      { photoId: 26, tagId: 1 },
      { photoId: 31, tagId: 1 },
      { photoId: 36, tagId: 1 },
      { photoId: 41, tagId: 1 },
      { photoId: 46, tagId: 1 },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('photo_tags', null, {});
  },
};
