'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('estimateitems', [
      {
        estimateid: 1,
        productid: 1,
        quantity: 1,
        unitprice: 21700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estimateid: 1,
        productid: 57,
        quantity: 1,
        unitprice: 5600,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estimateid: 1,
        productid: 66,
        quantity: 1,
        unitprice: 3080,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estimateitems', null, {});
  }
};
