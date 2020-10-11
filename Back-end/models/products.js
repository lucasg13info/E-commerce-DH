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
      caracteristica1: DataTypes.STRING,
      caracteristica2: DataTypes.STRING,
      caracteristica3: DataTypes.STRING,
      caracteristica4: DataTypes.STRING,      
      
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
      });
      Products.hasMany(models.pictureProduct, {
        foreingKey: "products_id"
      });
      Products.belongsToMany(models.Requesties, {
        through: "relationRequest"
      });
      Products.belongsToMany(models.Categories, {
        through: "productsCategories"
      });
    } 
    
    return Products;
  };