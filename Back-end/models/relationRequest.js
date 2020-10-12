const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    const relationRequest = sequelize.define('relationRequest', {
      // definindo os atributos do model!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      requesties_id: {
        type: DataTypes.INTEGER,
        references: {
          models: "Requesties",
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
      modelName: 'relationRequest',
      tableName: "relation_request"
    });
    
    relationRequest.associate = (models)=> {
      //associações vão aqui!
      // Users.hasMany // belongsTo(models.typeUser, {
      //   foreingKey: "type_users_typeUser_id"
      // })

    } 
    
    return relationRequest;
  };