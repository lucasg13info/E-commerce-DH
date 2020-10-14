const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
   
    const pictureProduct = sequelize.define('pictureProduct', {
      // definindo os atributos do model!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      pic_caminho: DataTypes.STRING,
      pic_status: DataTypes.INTEGER,      
      
      products_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "products",
          key: "id"
        },
        // field: "type_produts_id"
      }
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'pictureProduct',
      tableName: 'picture_product'
    });
    
    // Products.associate = (models)=> {
    //   //associações vão aqui!
    //   Products.belongsTo(models.type_products, {
    //     foreingKey: "type_produts_id",
    //     targetKey: "id"
    //   })
    // } 
    pictureProduct.associate = (models)=> {
      pictureProduct.belongsTo(models.Products)
    }
    
    return pictureProduct;
  };