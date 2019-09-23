'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', 
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  User.associate = function(models) {
    // Use can make many Post
    User.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'posts',
      onDelete: 'CASCADE',
    });
    // Use can make many Comments
    User.hasMany(models.Comment, {
      foreignKey: 'userId',
      as: 'comments',
      onDelete: 'CASCADE',
    });
  };
  return User;
};