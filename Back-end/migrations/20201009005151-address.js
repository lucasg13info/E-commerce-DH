module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      add_descricao: {
        type: Sequelize.STRING
      },
      add_bairro: {
        type: Sequelize.STRING
      },
      add_cep: {
        type: Sequelize.INTEGER
      },
      add_numero: {
        type: Sequelize.INTEGER
      },
      add_referencia: {
        type: Sequelize.STRING
      },
      add_cidade: {
        type: Sequelize.STRING
      },
      add_complemento: {
        type: Sequelize.STRING
      },
      add_estado: {
        type: Sequelize.STRING
      },
      add_uf: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
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
    await queryInterface.dropTable('Address');
  }
};