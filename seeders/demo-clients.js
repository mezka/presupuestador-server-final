'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clients', [{
      name: 'Emiliano Mesquita Drago',
      phonenumber0: '1540766551',
      address0: 'Azcuenaga 347',
      email0: 'emiliano_mesquita@hotmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clients', null, {});
  }
};
