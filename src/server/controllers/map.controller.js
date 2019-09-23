'use strict'

const db = require('../database');

const maps= db.Maps; 
const user_maps = db.User_Maps;

//Post a Account
exports.create = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    console.log("exportts create", req.body.name);
    // Save to PostgreSQL database

   /*  user_maps.create({
        "userID": req.body.userID,
        "mapID": 
    }); */
    maps.create({
        "name":      req.body.name,
        "latitude":  req.body.latitude,
        "longitude": req.body.longitude,
        "comment":   req.body.comment,
        "userId": req.body.userId
    }).then( map =>{
        console.log("exportts map", map.dataValues);
        //Send created Account to Client
        /* res.set('x-token', token); */
        res.status(200).json({'userMap': map});
        console.log("Map - " + map);
    }).catch(err => {
        console.log('Erororororor: '+err);
        res.status(500).json({msg:"error", details:err});
    });
};

