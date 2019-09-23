'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('accounts', 
    [
      {
        firstname:"Joe",
        lastname:"Thomas",
        username:"Thomi",
        email : "Joe@gmail.com",
        password: bcrypt.hashSync("123456", 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:"Jowa",
        lastname:"Thos",
        username:"Jwana",
        email : "Jowa@gmail.com",
        password: bcrypt.hashSync("123456", 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:"Jowie",
        lastname:"dds",
        username:"Jo",
        email : "Jowie@gmail.com",
        password:bcrypt.hashSync("123456", 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:"Lauiren",
        lastname:"Thwas",
        username:"Lui",
        email : "Lauruibe@gmail.com",
        password:bcrypt.hashSync("123456", 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:"Mary",
        lastname:"Toos",
        username:"Mu",
        email : "Mary@gmail.com",
        password: bcrypt.hashSync("123456", 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('accounts', null, {});
    
  }
};
