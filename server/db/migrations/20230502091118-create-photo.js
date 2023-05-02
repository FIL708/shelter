module.exports = {
  async up(queryInterface, { INTEGER, STRING }) {
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
      adoptionID: {
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
