/////   
//      
//
////  
var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var bearerToken = require('express-bearer-token');
const bcrypt = require('bcryptjs');

app.use(bodyParser.json())

const cors = require('cors');
const corsoptions = {
  origin: 'localhost',
  optionsSuccessStatus:200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}

app.use(cors())//corsoptions))
app.use(bearerToken());
//Gig Routes
app.use('/gigs',require('./Routers/account.route'));

const db = require('../server/database');

//force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(()=>{
  console.log('Drop and Resync with {force: true}');
  initial();
});

require('../server/Routers/account.route')(app);

// create a Server
var server = app.listen(8090, function(){

  let host = server.address().address;
  let port = server.address().port;
  console.log("App listening at HTTp:%s:%s", host, port);

})

function initial(){
  let maps=[
    {
      latitude: 32.5,
      longitude: -6,
      userID: 1,
      comment: 'Ich bin salwa'
    },
    {
      latitude: 22.5,
      longitude: -4,
      userID: 2,
      comment: 'Ich bin sahar'
    }
  ];
  let accounts = [
    {
      firstname:"Joe",
      lastname:"Thomas",
      username:"Thomi",
      email : "Joe@gmail.com",
      password: bcrypt.hashSync("123456", 8),
      age: 36
    },
    {
      firstname:"Jowa",
      lastname:"Thos",
      username:"Jwana",
      email : "Jowa@gmail.com",
      password: bcrypt.hashSync("123456", 8),
      age: 36
    },
    {
      firstname:"Jowie",
      lastname:"dds",
      username:"Jo",
      email : "Jowie@gmail.com",
      password:bcrypt.hashSync("123456", 8),
      age: 36
    },
    {
      firstname:"Lauiren",
      lastname:"Thwas",
      username:"Lui",
      email : "Lauruibe@gmail.com",
      password:bcrypt.hashSync("123456", 8),
      age: 36
    },
    {
      firstname:"Mary",
      lastname:"Toos",
      username:"Mu",
      email : "Mary@gmail.com",
      password: bcrypt.hashSync("123456", 8),
      age: 36
    },
  ]

  // Init data -> save to Postgressql

  const Account = db.Accounts;
  const Map = db.Map;


  for(let i=0 ; i< accounts.length;i++){
    Account.create(accounts[i]);
  }

  for(let i=0 ; i< maps.length;i++){
    Map.create(maps[i]);
  }
}
 
