module.exports = {
  async up(queryInterface, { INTEGER, STRING, DATE }) {
    await queryInterface.createTable('Photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      url: {
        type: STRING,
      },
      tagID: {
        type: INTEGER,
      },
      adoptionID: {
        type: INTEGER,
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
    await queryInterface.dropTable('Photos');
  },
};
