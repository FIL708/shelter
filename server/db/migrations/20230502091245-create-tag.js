module.exports = {
  async up(queryInterface, { INTEGER, STRING, DATE }) {
    await queryInterface.createTable('Tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      name: {
        type: STRING,
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
    await queryInterface.dropTable('Tags');
  },
};
