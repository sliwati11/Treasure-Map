'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('locations',
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      mapId: DataTypes.INTEGER,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT
    }, {});

    Locations.associate = function(models) {
      // Location belongs to one Map 
      Locations.belongsTo(models.maps, {
          foreignKey: 'mapId',
          as: 'comment',
          onDelete: 'CASCADE',
        });

      // Location belongs to a user
      Locations.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'author',
        onDelete: 'CASCADE',
      });
      
    };
  return Locations;
};