'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'PUERTAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MODULOS BLINDADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HERRAJES',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CERRADURAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RF30',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RF60',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RF90',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RF120',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
