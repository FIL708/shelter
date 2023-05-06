module.exports = {
  async up(queryInterface, { INTEGER, STRING, DATE }) {
    await queryInterface.createTable('Opinions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      body: {
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
    await queryInterface.dropTable('Opinions');
  },
};
