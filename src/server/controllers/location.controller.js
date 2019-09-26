'use strict'

const db = require('../database');

const locations= db.Locations;

//Post a Account
exports.create = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    console.log("exportts create", req.body.title);
    // Save to PostgreSQL database


    locations.create({
        "title":      req.body.title,
        "content":   req.body.content,
        "userId": req.body.userId,
        "mapId": req.body.mapId,
        "longitude":req.body.longitude,
        "latitude": req.body.latitude
    }).then( locations =>{
        console.log("exportts locations", locations.dataValues);
        //Send created Account to Client
        /* res.set('x-token', token); */
        res.status(200).json({'Locations': locations});
        console.log("locations - " + locations);
    }).catch(err => {
        console.log('Erororororor: '+err);
        res.status(500).json({msg:"error", details:err});
    });
}


// FETCH All Customers
exports.findAll = (req, res) => {
    console.log('locat req: ', req.params);
    locations.findAll().then(locations => {
        console.log('locat res: ', locations);

        // Send All Customers to Client
        res.json(locations.sort(function(c1, c2){return c1.id - c2.id}));
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
};

// Find a Map by Id
exports.findById = (req, res) => {  
    locations.findByPk(req.params.id).then(location => {
        res.json(location);
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
  };