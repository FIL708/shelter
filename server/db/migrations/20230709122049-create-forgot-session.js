module.exports = {
  async up(queryInterface, { INTEGER, DATE, UUIDV4 }) {
    await queryInterface.createTable('ForgotSession', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: UUIDV4,
      },
      userId: {
        type: INTEGER,
      },
      expirationDate: {
        type: DATE,
        defaultValue: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
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
    await queryInterface.dropTable('ForgotSession');
  },
};