'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('maps', [
      {
        name: 'Bergen',
        comment: 'hier ist groß',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Land',
        comment: 'hier ist großartig',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('maps', null, {});
    
  }
};
