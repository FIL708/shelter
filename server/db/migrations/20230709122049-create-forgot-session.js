module.exports = {
  async up(queryInterface, { UUIDV4, UUID, INTEGER, DATE }) {
    await queryInterface.createTable('ForgotSessions', {
      id: {
        allowNull: false,
        defaultValue: UUIDV4,
        primaryKey: true,
        type: UUID,
      },
      userId: {
        type: INTEGER,
      },
      expirationDate: {
        type: DATE,
        defaultValue: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
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
    await queryInterface.dropTable('ForgotSessions');
  },
};
