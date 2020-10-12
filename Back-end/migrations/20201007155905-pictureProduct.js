module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('picture_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pic_carrinho: {
        type: Sequelize.STRING
      },
      pic_status: {
        type: Sequelize.INTEGER
      },
    
      products_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
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
    await queryInterface.dropTable('picture_products');
  }
};