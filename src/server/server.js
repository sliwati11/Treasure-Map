
const { Client }= require('pg');

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "Overdrive1819",
  port : 5432,
  database : 'postgres' 
});





execute()


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
  /* .then( () => client.query(" INSERT INTO account VALUES ($1)", ["sahar"])) */
  .then( () => client.query("select * from test where name =$1",["sahar"] ))
  .then( results => console.table(results.rows) )
  .catch( e => console.log(e))
  .finally( () => client.end()) 
}