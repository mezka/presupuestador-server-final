'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        id: 3,
        name: 'HERRAJES',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'CERRADURAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'RF30',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'RF60',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'RF90',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'RF120',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'VENTANAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
