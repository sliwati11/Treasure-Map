'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', 
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  User.associate = function(models) {
    // a user has many posts and a post belongs to a user (1:n)
    User.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'posts',
      onDelete: 'CASCADE',
    });
    User.hasMany(models.Comment, {
      foreignKey: 'userId',
      as: 'comments',
      onDelete: 'CASCADE',
    });
  };
  return User;
};