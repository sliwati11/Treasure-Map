const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "postgres",
  password: "Overdrive1819",
  database
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
