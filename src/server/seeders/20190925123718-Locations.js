'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('locations', 
    [
    
      {
        title: 'John Doe',
        content: 'janecvxv dxfsddoe@example.com',
        userId: 2,
        mapId: 1,
        latitude:23.4,
        longitude:-6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'jsdhfJohn Doe',
        content: 'janecvxv dxfsddoeexample.com',
        userId: 1,
        mapId: 2,
        latitude: 53.4,
        longitude: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('locations', null, {});
    
  }
};
