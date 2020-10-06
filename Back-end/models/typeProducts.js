const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    const typeProducts = sequelize.define('typeProducts', {
      // definindo os atributos do model!
      type_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      type_descricao: DataTypes.STRING,
      type_status: DataTypes.INTEGER,
      categories_cat_id: {
        type: DataTypes.INTEGER,
        
      }
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'typeProducts',
      tableName: 'type_products'
    });
    
    typeProducts.associate = (models)=> {
      //associações vão aqui!
      typeProducts.belongsTo(models.Categories, {
        foreingKey: "categories_cat_id"
      }),
      typeProducts.hasMany (models.Products, {
        foreingKey: "type_produts_type_id"
      })

    } 
    
    return typeProducts;
  };