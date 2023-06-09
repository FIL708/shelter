module.exports = {
  async up(queryInterface, { INTEGER, STRING, DATE }) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      firstName: {
        type: STRING,
        defaultValue: '',
      },
      lastName: {
        type: STRING,
        defaultValue: '',
      },
      role: {
        type: STRING,
        defaultValue: 'user',
      },
      email: {
        type: STRING,
        unique: true,
      },
      phone: {
        type: STRING,
      },
      password: {
        type: STRING,
      },
      avatar: {
        type: STRING,
      },
      birthday: {
        type: DATE,
      },
      createdAt: {
        allowNull: false,
        type: DATE,
      },
      updatedAt: {
        allowNull: false,
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
    await queryInterface.dropTable('Users');
  },
};
