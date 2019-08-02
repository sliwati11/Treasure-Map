/* 
const { Client }= require('pg');

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "Overdrive1819",
  port : 5432,
  database : 'postgres' 
});


var app = require('../index');
const pool = require('../index')



test()
execute()

function test(){
  app.get('/:id', (req, res, next) => {
    db.query('SELECT * FROM test WHERE id = $1', [id], (err, res) => {
      if (err) {
        return next(err)
      }
      res.send(res.rows[0])
    })
  })
}


async function execute(){
  try{
    await client.connect()
    console.log("Connected successfully")
    //const results = await client.query("update test set firstname=$1, lastname=$2 where name =$3",['sdf','fete','Guerta'])
    const results = await client.query("select * from test")
    console.log("Updated successfully")
    console.table(results.rows)
    
  }catch(ex){
    const results2 = await client.query("select * from test;")
    console.table(results2.rows)
    console.log(
      'Something wrong happened $1,["ex"]')
  }
  finally{
    await client.end()
    console.log("Client disconnected successfully")
  }
  
}

function execute_with_promise(){

  client.connect()
  .then( () =>  console.log("Connected Successfuly"))
  .then( () => client.query(" INSERT INTO account VALUES ($1)", ["sahar"])) 
  .then( () => client.query("select * from test where name =$1",["sahar"] ))
  .then( results => console.table(results.rows) )
  .catch( e => console.log(e))
  .finally( () => client.end()) 
  
} */
var express= require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

const cors = require('cors');
const corsoptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus:200
}

app.use(cors(corsoptions))


const db = require('../server/database');

//force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(()=>{
  console.log('Drop and Resync with {force: true}');
  initial();
});

require('../server/Routers/account.route')(app);

// create a Server
var server = app.listen(8090, function(){
  let host = server.address().address
  let port = server.address().port
  console.log("App listening at HTTp:%s:%s", host, port);

})

function initial(){
  let accounts = [
    {
      firstname:"Joe",
      lastname:"Thomas",
      age: 36
    },
    {
      firstname:"Jowa",
      lastname:"Thos",
      age: 36
    },
    {
      firstname:"Jowie",
      lastname:"dds",
      age: 36
    },
    {
      firstname:"Lauiren",
      lastname:"Thwas",
      age: 36
    },
    {
      firstname:"Mary",
      lastname:"Toos",
      age: 36
    },
  ]

  // Init data -> save to Postgressql

  const Account = db.accounts;
  Account.create(accounts[2]);
  for(let i ; i< accounts.length;i++){
    Account.create(accounts[i]);
    console.log('Account '+i);
  }
}