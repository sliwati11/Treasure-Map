'use strict';
const db = require('../database');
var nJwt = require('njwt');
var fs = require('fs');
const bcrypt = require('bcryptjs');
const account = db.Accounts;

//Post a Account
exports.create = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    var secureRandom = require('secure-random');

    var signingKey = secureRandom(256, {type: 'Buffer'}); // Create a highly random byte array of 256 bytes

    var claims = {
      iss: "localhost",  // The URL of your service
      sub: "",    // The UID of the user in your system
      scope: "self, admins"
    }

    //For more security it be algo 'HS512' used.
    var jwt = nJwt.create(claims,signingKey,'HS512');
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    console.log('JWT: ',jwt);
    var token = jwt.compact();
    console.log('TOKEN. ', token);
    console.log("exportts create");
    // Save to PostgreSQL database
    account.create({
        "firstname": req.body.firstName,
        "lastname": req.body.lastName,
        "username": req.body.userName,
        "email": req.body.email,
        "password": hashedPassword //req.body.password
    }).then( account =>{
        //Send created Account to Client
        /* res.set('x-token', token); */
        res.json(account);
        //console.log("JWT Token - " + token);
    }).catch(err => {
        console.log('Erororororor: '+err);
        res.status(500).json({msg:"error", details:err});
    });
};

exports.checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

// Fetch all Customers
exports.findAll_control = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    // Save to PostgreSQL database
    account.findAll().then( accounts => {
        console.table(accounts);
        //res.setHeader('Access-Control-Allow-Origin');
        res.setHeader("Content-Type", "text/html");

        res.set('Content-Type', 'text/plain');

        // Send All Accounts to Client
        res.json(accounts); 
        console.log("findAll dkt "+ res +' res: '+  res.password);
        
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg:"error", details:err});
    });
};

// Fetch One User by ID
exports.findOne=(req, res) =>{

    const username = "Jwana" //req.body.username;
    const password = "123456" //req.body.password;
    
    account.find({
      where: { username: username,
        password: password }
    })
      .then(user => {
        res.json(user);
    });

}
// Authenticate a User
exports.authenticateUser = (req, res) => {
  
  if (!req.body.username || !req.body.password) {
    res.status(404).json({
      message: 'username and password are needed!',
    });
  } else {
    account.findAll({
      where :{
        username : req.body.username /* ,
        password : hashedPassword */
      }
    }).then(function(device) {
      if (!device) {
          return 'not find';
      }
      else{
          var eingeloggteUser= device.pop().dataValues;
          var hashedPassword = bcrypt.hashSync(eingeloggteUser.password, 8);
          console.log('hashedPassword: ', hashedPassword);
          
          if (bcrypt.compareSync(req.body.password, hashedPassword)) {
        
            console.log('eingeloggteUser: ', device, 'bcrypt.compareSync(req.body.password, "123456")', bcrypt.compareSync(req.body.password, hashedPassword));
            
            res.json({
              id: eingeloggteUser.id,
              username: eingeloggteUser.username,
              firstName: eingeloggteUser.firstname,
              lastName: eingeloggteUser.lastname,
              email: eingeloggteUser.email,
              success: true,
              token: 'fake-jwt-token',
              /* role: user.role, */
            });
        } 
      }
   });
  }  
};


exports.delete = (req, res) =>{
    res.setHeader('Content-Type', 'text/html');
    console.log("Delete");
    const id = req.params.id;
    account.destroy({
        where:{ id: id }
    }).then(()=>{
        res.json({msg: 'This is CORS-enabled for all origins!'});
        res.status(200).json({ msg: 'Delected Successfully -> Customer Id = '+ id})
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error", details: err});
    });
    
};
