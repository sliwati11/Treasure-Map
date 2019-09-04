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

module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('accounts',
        {
            firstname: {
                type: DataTypes.STRING
            },
            lastname: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            username : {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            }
        
        }
);
    return Account;
}