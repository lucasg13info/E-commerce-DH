const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
   
    const Products = sequelize.define('Products', {
      // definindo os atributos do model!
      prd_id: {
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
      
      
      type_produts_type_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "typeProducts",
          key: "type_id"
        }
      }
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'Products',
      tableName: 'products'
    });
    
    Products.associate = (models)=> {
      //associações vão aqui!
      Products.belongsTo(models.typeProducts, {
        foreingKey: "type_produts_type_id",
        as: 'typeProducts'
      })
    } 
    
    return Products;
  };