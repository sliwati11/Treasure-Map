
const { Client }= require('pg');

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "Overdrive1819",
  port : 5432,
  database : 'postgres' 
});

client.connect()
.then( () =>  console.log("Connected Successfuly"))
.then( () => client.query(" INSERT INTO test VALUES ($1)", ["sahar"]))
.then( () => client.query("select * from test where name =$1",["sahar"] ))
.then( results => console.table(results.rows) )
.catch( e => console.log(e))
.finally( () => client.end())