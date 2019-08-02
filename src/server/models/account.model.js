'use strict';

/* const Sequelize = require('sequelize');
const db = require('../database');


const Account = db.define('benutzer',
{
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
    
}) 

module.exports = Account;
*/

module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define('Customers',
        {
            firstname: {
                type: Sequelize.STRING
            },
            lastname: {
                type: Sequelize.STRING
            },
            age: {
                type: Sequelize.STRING
            }
        
        }
);
    return Account;
}