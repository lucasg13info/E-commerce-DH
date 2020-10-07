module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_descricao: {
        type: Sequelize.STRING
      },
      user_email: {
        type: Sequelize.STRING
      },
      user_cpf: {
        type: Sequelize.INTEGER
      },
      user_telefone: {
        type: Sequelize.STRING(20)
      },
      user_telefone2: {
        type: Sequelize.STRING(20)
      },
      user_status: {
        type: Sequelize.INTEGER
      },
      type_users_typeUser_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "typeUsers",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};