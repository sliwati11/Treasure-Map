const db = require('../database');
const account = db.Accounts;

//Post a Account
exports.create = (req, res) => {
    // Save to PostgreSQL database
    account.create({
        "firstname": "sisi",
        "lastname": "user@gmail.com",
        "age": "user@gmail.com"
    }).then( account =>{
        //Send created Account to Client
        res.json(account);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg:"error", details:err});
    });
};


// Fetch all Customers
exports.findAll = (req, res) => {
    // Save to PostgreSQL database
    account.findAll().then( accounts => {
        console.table(accounts);
        // Send All Accounts to Client
        res.json(200); 
        
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg:"error", details:err});
    });
};
