const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    const Email = sequelize.define('Email', {
      // definindo os atributos do model!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      emailAutomatico: DataTypes.STRING
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'Email',
    });
    
    
    return Email;
  };