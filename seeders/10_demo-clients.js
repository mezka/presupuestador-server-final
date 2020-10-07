'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clients', [{
      name: 'Mariano',
      phonenumber0: '1156341256',
      address0: 'Azcuenaga 112',
      email0: 'mariano_galindez@hotmail.com',
      cuil: '20363971157',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Emiliano',
      phonenumber0: '213412341',
      address0: 'asda',
      email0: 'asdas@hotmail.com',
      cuil: '12344563456',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clients', null, {});
  }
};
