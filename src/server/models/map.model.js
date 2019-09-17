'use strict';


module.exports = (sequelize, DataTypes) => {
    const Maps = sequelize.define('usermaps',//'accounts',
        {
            latitude: {
                type: DataTypes.FLOAT
            },
            longitude: {
                type: DataTypes.FLOAT
            },
            comment: {
                type: DataTypes.STRING
            },
            userID : {
                type: DataTypes.STRING
            }            
        
        }
);
    return Maps;
}