'use strict';

module.exports = (sequelize, DataTypes) => {

  const Account = sequelize.define('account', 
  {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  
  Account.associate = function(models) {
    // a user has many maps and a map belongs to a user
    Account.hasMany(models.maps, {
      foreignKey: 'userId',
      as: 'maps',
      onDelete: 'CASCADE',
    });
    // a user has many Posts and a Post belongs to a Map
    Account.hasMany(models.eintrags, {
      foreignKey: 'userId',
      as: 'eintrags',
      onDelete: 'CASCADE',
    });    
  
  };
  return Account;
};