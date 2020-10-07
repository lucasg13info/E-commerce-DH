const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
   
    const Products = sequelize.define('Products', {
      // definindo os atributos do model!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      prd_descricao: DataTypes.STRING,
      prd_status: DataTypes.INTEGER,
      prd_valor: DataTypes.INTEGER,
      qtd_estoque: {
        type: DataTypes.INTEGER, 
        allowNull: true,
      },
      
      
      typeProductId: {
        type: DataTypes.INTEGER,
        references: {
          model: "type_products",
          key: "id",
        },
        field: "type_produts_id"
      }
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'Products',
      tableName: 'products'
    });
    
    Products.associate = (models)=> {
      //associações vão aqui!
      Products.belongsTo(models.type_products, {
        foreingKey: "type_produts_id",
        targetKey: "id"
      })
    } 
    
    return Products;
  };