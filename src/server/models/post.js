'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', 
  {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  
  Post.associate = function(models) {
    // a user has many comments and a comment belongs to a user (1:n)
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments',
      onDelete: 'CASCADE',
    });

    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author',
      onDelete: 'CASCADE',
    })
  
  };
  return Post;
};