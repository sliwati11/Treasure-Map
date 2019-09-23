'use strict';



//Table with all MAps
module.exports = (sequelize, DataTypes) => {

    const Maps = sequelize.define('maps',//'accounts',
        {
            
            name : {
                type: DataTypes.STRING
            },
            comment: {
                type: DataTypes.STRING
            },
            userId:{
                type: DataTypes.INTEGER
            }           
        
        }, {});
        
    Maps.associate= function(models) {
        // a Map belongs to a user (1:1)
        Maps.belongsTo(models.accounts, {
            foreignKey: 'userId',
            as:'author',
            onDelete: 'CASCADE',
        });

        //a Map has many Posts
        Maps.hasMany(models.eintrags,{
            foreignKey: 'mapId',
            as: 'eintrag',
            onDelete: 'CASCADE',
        });
    }        

    return Maps;
}