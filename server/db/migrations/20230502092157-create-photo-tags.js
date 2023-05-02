module.exports = {
  async up(queryInterface, { INTEGER, DATE }) {
    await queryInterface.createTable('photo_tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      tagID: {
        type: INTEGER,
        references: { model: 'Tags', key: 'id' },
        onDelete: 'CASCADE',
      },
      photoID: {
        type: INTEGER,
        references: { model: 'Photos', key: 'id' },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('photo_tags');
  },
};
