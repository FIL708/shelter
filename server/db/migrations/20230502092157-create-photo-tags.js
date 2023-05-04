module.exports = {
  async up(queryInterface, { INTEGER }) {
    await queryInterface.createTable('photo_tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      tagId: {
        type: INTEGER,
        references: { model: 'Tags', key: 'id' },
        onDelete: 'CASCADE',
      },
      photoId: {
        type: INTEGER,
        references: { model: 'Photos', key: 'id' },
        onDelete: 'CASCADE',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('photo_tags');
  },
};
