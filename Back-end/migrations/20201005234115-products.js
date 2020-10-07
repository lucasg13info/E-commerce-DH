module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prd_descricao: {
        type: Sequelize.STRING
      },
      prd_status: {
        type: Sequelize.INTEGER
      },
      prd_valor: {
        type: Sequelize.INTEGER
      }, 
      qtd_estoque: {
        type: Sequelize.INTEGER, 
        allowNull: true,
      },
      
       type_produts_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "type_products",
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
    await queryInterface.dropTable('products');
  }
};