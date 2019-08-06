
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
var Sequelize = require('sequelize');


/* const pg = require('pg');

const config = {
  user: 'postgres', //this is the db user credential
  database: 'postgres',
  password: 'Overdrive1819',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

const db = new Sequelize('postgres', 'postgres', 'Overdrive1819', {
    host: 'localhost',
    dialect: 'postgres',
    freezeTableName: true,
     operatorsAliases : false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle:1000
  },
  }); */

//Database src\server\database.js
const db = require('./server/database');

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Test db
db.sequelize.authenticate()
.complete(function(err) {
    if (!!err) {
        console.log('Unable to connect to the database:', err)
    } else {
        console.log('Connection has been established successfully.')
    }
    });


const port = process.env.port || 8080 ;

app.get('/', (req, res) =>{
    res.send('Welcome to our Home');
});

//Routes
//app.use('/gigs', require('./server/Routers/gig'));
app.use('/accounts', require('./server/Routers/account.route'));

app.listen(port, () => {
    console.log(`We are live at 127.0.0.1:${port}`);
 });
