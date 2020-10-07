module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('typeUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      typeUser_descricao: {
        type: Sequelize.STRING
      },
      typeUser_status: {
        type: Sequelize.INTEGER
      },
      // type_users_typeUser_id: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "type_users",
      //     key: "typeUser_id"
      //   }
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('typeUsers');
  }
};