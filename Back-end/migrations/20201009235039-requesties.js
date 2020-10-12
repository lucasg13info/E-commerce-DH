module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('requesties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num_ped: {
        type: Sequelize.INTEGER
      },
      valor_total: {
        type: Sequelize.FLOAT
      },
      request_date: {
        type: Sequelize.DATE
      },
      ped_status: {
        type: Sequelize.INTEGER
      },
      users_id: {
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
    await queryInterface.dropTable('requesties');
  }
};