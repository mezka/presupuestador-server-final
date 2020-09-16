'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        modelName: 'BARRAL ANTIPANICO SIMPLE PUSH NEGRO',
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'PUERTA RF60 0900X2000',
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
