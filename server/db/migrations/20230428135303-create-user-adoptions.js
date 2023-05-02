module.exports = {
  async up(queryInterface, { INTEGER }) {
    await queryInterface.createTable('user_adoptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      userID: {
        type: INTEGER,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE',
      },
      adoptionID: {
        type: INTEGER,
        references: { model: 'Adoptions', key: 'id' },
        onDelete: 'CASCADE',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('user_adoptions');
  },
};
