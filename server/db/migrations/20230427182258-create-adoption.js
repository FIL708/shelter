module.exports = {
  async up(queryInterface, { INTEGER, STRING, TEXT, DATE }) {
    await queryInterface.createTable('Adoptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      name: {
        type: STRING,
      },
      description: {
        type: TEXT,
      },
      shortDescription: {
        type: TEXT,
      },
      likes: {
        type: INTEGER,
      },
      views: {
        type: INTEGER,
      },
      species: {
        type: STRING,
      },
      gender: {
        type: STRING,
      },
      age: {
        type: INTEGER
      },
      weight: {
        type: INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DATE,
      },
      deletedAt: {
        type: DATE,
      },
      addressId: {
        type: INTEGER,
        references: {
          model: 'Addresses',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Adoptions');
  },
};
