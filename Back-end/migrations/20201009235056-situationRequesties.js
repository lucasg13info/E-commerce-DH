module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('situation_request', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      situacao_descricao: {
        type: Sequelize.STRING
      },
      situacao_status: {
        type: Sequelize.STRING
      },
      requesties_ped_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Requesties",
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
    await queryInterface.dropTable('situation_request');
  }
};