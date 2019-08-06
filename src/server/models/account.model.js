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
    const Account = sequelize.define('accounts',
        {
            firstname: {
                type: Sequelize.STRING
            },
            lastname: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            username : {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            }
        
        }
);
    return Account;
}