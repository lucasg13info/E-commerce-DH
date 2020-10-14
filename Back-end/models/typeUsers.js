const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    const typeUsers = sequelize.define('type_users', {
      // definindo os atributos do model!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      typeUser_descricao: DataTypes.STRING,
      typeUser_status: DataTypes.INTEGER
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'typeUsers',
      tableName: 'type_users'
    });
    
    typeUsers.associate = (models)=> {
      //associações vão aqui!
      // Users.hasMany // belongsTo(models.typeUser, {
      //   foreingKey: "type_users_typeUser_id"
      // })
      typeUsers.hasMany(models.Users, {
        foreignKey: "user_type_users_id"
      })
    } 
    
    return typeUsers;
  };