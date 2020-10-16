'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('users', 'user_cpf', {
      type: Sequelize.STRING
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
