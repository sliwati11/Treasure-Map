'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    postId: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  
  Comment.associate = function(models) {
    //a post has many comments and a comment belongs to a post (1:n)
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author'
    });
    Comment.belongsTo(models.Post, {
      foreignKey: 'postId',
      as: 'post'
    });

  };
  return Comment;
};