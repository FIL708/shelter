module.exports = {
  async up(queryInterface, { INTEGER, DATE }) {
    await queryInterface.createTable('user_adoptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      userID: {
        type: INTEGER,
        references: { model: 'user', key: 'id' },
        onDelete: 'CASCADE',
      },
      adoptionID: {
        type: INTEGER,
        references: { model: 'adoption', key: 'id' },
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
    await queryInterface.dropTable('user_adoptions');
  },
};
