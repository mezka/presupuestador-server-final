'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clients', [{
      name: 'Mariano',
      phonenumber0: '1156341256',
      address0: 'Azcuenaga 112',
      email0: 'mariano_galindez@hotmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clients', null, {});
  }
};
