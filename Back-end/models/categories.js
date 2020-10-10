const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories', {
      // definindo os atributos do model!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      cat_descricao: DataTypes.STRING,
      cat_status: DataTypes.INTEGER,
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'Categories',
    });
    
    Categories.associate = (models)=> {
      //associações vão aqui!
      Categories.hasMany(models.type_products, {
        foreingKey: "categories_id",
        targetKey: "id",
        as: "hasTypeProducts"
      });
      Categories.belongsToMany(models.Products, {
        through: "productsCategories"
      });
    } 
    
    return Categories;
  };