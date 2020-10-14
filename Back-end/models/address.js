const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
      // definindo os atributos do model!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      add_descricao: DataTypes.STRING, // ok
      add_bairro: DataTypes.STRING, // ok
      add_cep: DataTypes.INTEGER,
      add_numero: DataTypes.INTEGER, // ok
      add_referencia: DataTypes.STRING, // ok
      add_cidade: DataTypes.STRING, // ok
      add_complemento: DataTypes.STRING, // ok
      add_estado: DataTypes.STRING, // ok
      add_uf: DataTypes.STRING, // ok
      add_users_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      }
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'address',
    });
    
    // Users.associate = (models)=> {
      //associações vão aqui!
      // Users.hasMany // belongsTo(models.typeUser, {
      //   foreingKey: "type_users_typeUser_id"
      // })
    // } 
    Address.associate = (models)=> {
      Address.belongsTo(models.Users)
    }
    
    return Address;
  };