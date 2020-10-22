'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('productcategories', [
      {
        productid: 1,
        categoryid: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 1,
        categoryid: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 2,
        categoryid: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 2,
        categoryid: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 3,
        categoryid: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 3,
        categoryid: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 4,
        categoryid: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 4,
        categoryid: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('productcategories', null, {});
  }
};
