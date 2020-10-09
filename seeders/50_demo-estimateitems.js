'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('estimateitems', [
      {
        estimateid: 1,
        productid: 1,
        quantity: 1,
        unitprice: 200000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estimateid: 1,
        productid: 2,
        quantity: 1,
        unitprice: 400000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estimateid: 1,
        productid: 2,
        quantity: 1,
        unitprice: 400000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estimateitems', null, {});
  }
};
