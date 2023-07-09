module.exports = {
  async up(queryInterface, {INTEGER, DATE}) {
    await queryInterface.createTable('ForgotSession', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      userId: {
        type: INTEGER
      },
      expiredDate: {
        type: DATE
      },
      createdAt: {
        allowNull: false,
        type: DATE
      },
      updatedAt: {
        allowNull: false,
        type: DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('ForgotSession');
  }
};