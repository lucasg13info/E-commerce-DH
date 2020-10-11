module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('relation_request', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      requesties_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Requesties",
          key: "id"
        }
      },
      products_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
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
    await queryInterface.dropTable('relation_request');
  }
};