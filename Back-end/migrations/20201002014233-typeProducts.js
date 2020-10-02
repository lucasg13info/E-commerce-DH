module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('type_products', {
      type_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_descricao: {
        type: Sequelize.STRING
      },
      type_status: {
        type: Sequelize.INTEGER
      },
      categories_cat_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "cat_id"
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
    await queryInterface.dropTable('type_products');
  }
};