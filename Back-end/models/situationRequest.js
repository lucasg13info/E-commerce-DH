const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    const situationRequest = sequelize.define('situationRequest', {
      // definindo os atributos do model!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      situacao_descricao: DataTypes.STRING,
      situacao_status: DataTypes.STRING,
      requesties_ped_id: {
        type: DataTypes.INTEGER,
        references: {
          models: "Requesties",
          key: "id"
        }
      }
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'situationRequest',
      tableName: "situation_request"
    });
    
    situationRequest.associate = (models)=> {
      //associações vão aqui!
      // Users.hasMany // belongsTo(models.typeUser, {
      //   foreingKey: "type_users_typeUser_id"
      // })
      situationRequest.belongsTo(models.Requesties);

    } 
    
    return situationRequest;
  };