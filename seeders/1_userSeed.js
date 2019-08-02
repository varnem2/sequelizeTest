'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 0,
        username: 'User1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1,
        username: 'User2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {
      id: [
        0, 1
      ]
    });
  }
};
