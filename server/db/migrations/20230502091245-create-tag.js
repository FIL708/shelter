module.exports = {
  async up(queryInterface, { INTEGER, STRING }) {
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
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Tags');
  },
};
