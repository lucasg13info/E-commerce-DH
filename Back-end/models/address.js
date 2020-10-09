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
      add_descricao: DataTypes.STRING,
      add_bairro: DataTypes.STRING,
      add_cep: DataTypes.INTEGER,
      add_status: DataTypes.INTEGER,
      add_entrega: DataTypes.STRING,
      add_referencia: DataTypes.STRING,
      add_cidade: DataTypes.STRING,
      add_complemento: DataTypes.STRING,
      add_estado: DataTypes.STRING,
      add_uf: DataTypes.STRING,
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
    
    return Address;
  };