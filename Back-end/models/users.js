const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
      // definindo os atributos do model!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_descricao: DataTypes.STRING,
      user_email: DataTypes.STRING,
      user_cpf: DataTypes.INTEGER,
      user_telefone: DataTypes.STRING(20),
      user_telefone2: DataTypes.STRING(20),
      user_status: DataTypes.INTEGER
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'Users',
    });
    
    Users.associate = (models)=> {
      //associações vão aqui!
      // Users.hasMany // belongsTo(models.typeUser, {
      //   foreingKey: "type_users_typeUser_id"
      // })
    } 
    
    return Users;
  };