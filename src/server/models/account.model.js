'use strict';


// User accounts
module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('accounts',//'accounts',
        {
            /* id:{
                type : DataTypes.STRING, primaryKey: true
            }, */
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
        
        }, {
            classMethods: {
              associate: function(models) {
                // associations can be defined here
                Account.hasMany(models.maps, {
                    foreignKey: 'user_id',
                    constraints: false,
                });    
              }
            }
          });
    
    
    
    
   
    return Account;
}