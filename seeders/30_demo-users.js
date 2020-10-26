'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: "user@demo.com",
      password: "$2a$10$eH0zH112JOFP2Pu54x2H3.ftJ9cmcAgomteefMOIpxY3iX/gExnV",
      name: "Juan Demo",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
