'use strict';


module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('accounts',//'accounts',
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