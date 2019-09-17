'use strict'

const db = require('../database');

const maps= db.Map;

//Post a Account
exports.create = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    console.log("exportts create", req.body.latitude);
    // Save to PostgreSQL database
    maps.create({
        "latitude": req.body.latitude,
        "longitude": req.body.longitude,
        "comment": req.body.comment,
        "userID":req.body.userID,
    }).then( map =>{
        console.log("exportts create", map);
        //Send created Account to Client
        /* res.set('x-token', token); */
        res.status(200).json({'userMap': map});
        console.log("Map - " + map);
    }).catch(err => {
        console.log('Erororororor: '+err);
        res.status(500).json({msg:"error", details:err});
    });
};

