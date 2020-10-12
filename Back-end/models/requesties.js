const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    const Requesties = sequelize.define('Requesties', {
      // definindo os atributos do model!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      num_ped: DataTypes.INTEGER,
      valor_total: DataTypes.FLOAT,
      request_date: DataTypes.DATE,
      ped_status: DataTypes.INTEGER,
      users_id: {
        type: DataTypes.INTEGER,
        references: {
          models: "users",
          key: "id"
        }
      }
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'Requesties',
    });
    
    Requesties.associate = (models)=> {
      //associações vão aqui!
      // Users.hasMany // belongsTo(models.typeUser, {
      //   foreingKey: "type_users_typeUser_id"
      // })
      Requesties.belongsTo(models.Users);
      Requesties.hasMany(models.situationRequest, {
        foreingKey: "requesties_ped_id"
      });
      Requesties.belongsToMany(models.Products, {
        through: "relationRequest"
      })

    } 
    
    return Requesties;
  };