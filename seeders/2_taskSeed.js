'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
          id: 0,
          title: "Task 1 for user 1",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 0
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', {
        id: [
            0
        ]
    });
  }
};
