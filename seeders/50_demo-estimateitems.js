'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('estimateitems', [
      {
        estimateid: 1,
        productid: 1,
        price: 200000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estimateid: 1,
        productid: 2,
        price: 400000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estimateitems', null, {});
  }
};
