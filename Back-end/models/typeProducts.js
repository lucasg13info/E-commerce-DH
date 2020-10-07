const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    const type_products = sequelize.define('type_products', {
      // definindo os atributos do model!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      type_descricao: DataTypes.STRING,
      type_status: DataTypes.INTEGER,
      categories_id: {
        type: DataTypes.INTEGER,
        referencies: {model: "Categories", key: "id"}
      }
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'type_products',
      tableName: 'type_products'
    });
    
    type_products.associate = (models)=> {
      //associações vão aqui!
      type_products.belongsTo(models.Categories, {
        foreingKey: "categories_id",
        targetKey: "id",
      }),
      type_products.hasMany (models.Products, {
        foreingKey: "type_produts_id",
        targetKey: "id"
      })

    } 
    
    return type_products;
  };