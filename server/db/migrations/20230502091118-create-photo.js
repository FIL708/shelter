module.exports = {
  async up(queryInterface, { INTEGER, TEXT }) {
    await queryInterface.createTable('Photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      url: {
        type: TEXT,
      },
      adoptionId: {
        type: INTEGER,
        references: {
          model: 'Adoptions',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Photos');
  },
};
