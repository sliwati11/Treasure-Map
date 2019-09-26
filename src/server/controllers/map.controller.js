'use strict'

const db = require('../database');

const maps= db.Maps;

//Post a Account
exports.create = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    console.log("exportts create", req.body.name);
    // Save to PostgreSQL database


    maps.create({
        "name":      req.body.name,
        "comment":   req.body.comment,
        "userId": req.body.userId
    }).then( map =>{
        //Send created Account to Client
        /* res.set('x-token', token); */
        res.status(200).json({'map': map});
        /* console.log("exportts map", map.dataValues); */
        console.log("Map - " + res);
    }).catch(err => {
        console.log('Erororororor: '+err);
        res.status(500).json({msg:"error", details:err});
    });
};

// FETCH All Customers
exports.findAll = (req, res) => {
    maps.findAll().then(maps => {
        // Send All Customers to Client
        res.json(maps.sort(function(c1, c2){return c1.id - c2.id}));
    }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
    });
};

// Find a Map by Id
exports.findById = (req, res) => {
    console.log('findById', req.params.id);
    
    maps.findByPk(req.params.id).then(
        map => {
                res.json(map);
                })
        .catch(err => 
        {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

exports.findbyName = (req, res) => {

    /* console.log('Maps findID');

    maps.findOne({
        where: {name: req.params.name}
    }).then(
        map =>{
            res.json(map); 
        }).catch( err => 
        {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        }); */

};

