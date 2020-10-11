const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    const productsCategories = sequelize.define('productsCategories', {
      // definindo os atributos do model!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      categories_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id"
        }
      },
      products_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id"
        }
      }
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'productsCategories',
      tableName: "products_categories"
    });
    
    productsCategories.associate = (models)=> {
      //associações vão aqui!
      // Users.hasMany // belongsTo(models.typeUser, {
      //   foreingKey: "type_users_typeUser_id"
      // })

    } 
    
    return productsCategories;
  };