module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('photo_tags', [
      { photoId: 1, tagId: 1 },
      { photoId: 1, tagId: 3 },
      { photoId: 2, tagId: 3 },
      { photoId: 3, tagId: 3 },
      { photoId: 4, tagId: 3 },
      { photoId: 5, tagId: 3 },

      { photoId: 6, tagId: 1 },
      { photoId: 6, tagId: 3 },
      { photoId: 7, tagId: 3 },
      { photoId: 8, tagId: 3 },
      { photoId: 9, tagId: 3 },
      { photoId: 10, tagId: 3 },

      { photoId: 11, tagId: 1 },
      { photoId: 11, tagId: 3 },
      { photoId: 12, tagId: 3 },
      { photoId: 13, tagId: 3 },
      { photoId: 14, tagId: 3 },
      { photoId: 15, tagId: 3 },

      { photoId: 16, tagId: 1 },
      { photoId: 16, tagId: 3 },
      { photoId: 17, tagId: 3 },
      { photoId: 18, tagId: 3 },
      { photoId: 19, tagId: 3 },
      { photoId: 20, tagId: 3 },

      { photoId: 21, tagId: 1 },
      { photoId: 21, tagId: 2 },
      { photoId: 22, tagId: 2 },
      { photoId: 23, tagId: 2 },
      { photoId: 24, tagId: 2 },
      { photoId: 25, tagId: 2 },

      { photoId: 26, tagId: 1 },
      { photoId: 26, tagId: 2 },
      { photoId: 27, tagId: 2 },
      { photoId: 28, tagId: 2 },
      { photoId: 29, tagId: 2 },
      { photoId: 30, tagId: 2 },

      { photoId: 31, tagId: 1 },
      { photoId: 31, tagId: 2 },
      { photoId: 32, tagId: 2 },
      { photoId: 33, tagId: 2 },
      { photoId: 34, tagId: 2 },
      { photoId: 35, tagId: 2 },

      { photoId: 36, tagId: 1 },
      { photoId: 36, tagId: 2 },
      { photoId: 37, tagId: 2 },
      { photoId: 38, tagId: 2 },
      { photoId: 39, tagId: 2 },
      { photoId: 40, tagId: 2 },

      { photoId: 41, tagId: 1 },
      { photoId: 41, tagId: 2 },
      { photoId: 42, tagId: 2 },
      { photoId: 43, tagId: 2 },
      { photoId: 44, tagId: 2 },
      { photoId: 45, tagId: 2 },

      { photoId: 46, tagId: 1 },
      { photoId: 46, tagId: 2 },
      { photoId: 47, tagId: 2 },
      { photoId: 48, tagId: 2 },
      { photoId: 49, tagId: 2 },
      { photoId: 50, tagId: 2 },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('photo_tags', null, {});
  },
};
