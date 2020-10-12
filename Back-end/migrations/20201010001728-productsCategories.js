module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categories_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
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
    await queryInterface.dropTable('products_categories');
  }
};