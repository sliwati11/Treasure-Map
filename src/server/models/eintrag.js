'use strict';
module.exports = (sequelize, DataTypes) => {
  const Eintrag = sequelize.define('eintrag',
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      mapId: DataTypes.INTEGER,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT
    }, {});

    Eintrag.associate = function(models) {
    // Eintrag belongs to one Map and one User
      Eintrag.belongsTo(models.maps, {
        foreignKey: 'mapID',
        as: 'comment',
        onDelete: 'CASCADE',
      });

      //Eintrag belongs to a user
      Eintrag.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'author',
        onDelete: 'CASCADE',
      });
      
    };
  return Eintrag;
};