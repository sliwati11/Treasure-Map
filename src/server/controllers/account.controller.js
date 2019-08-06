const db = require('../database');
const account = db.Accounts;

//Post a Account
exports.create = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    
    console.log("exportts create");
    // Save to PostgreSQL database
    account.create({
        "firstname": req.body.firstName,
        "lastname": req.body.lastName,
        "username": req.body.userName,
        "email": req.body.email,
        "password": req.body.password,
    }).then( account =>{
        //Send created Account to Client
        res.json(account);
    }).catch(err => {
        console.log('Erororororor: '+err);
        res.status(500).json({msg:"error", details:err});
    });
};


// Fetch all Customers
exports.findAll = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log("findAll "+ req.body.firstname+' res: '+res.body);
    // Save to PostgreSQL database
    account.findAll().then( accounts => {
        console.table(accounts);
        //res.setHeader('Access-Control-Allow-Origin');
        res.setHeader("Content-Type", "text/html");

        res.set('Content-Type', 'text/plain');

        // Send All Accounts to Client
        res.json(accounts); 
        
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg:"error", details:err});
    });
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
