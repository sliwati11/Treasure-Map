const db = require('../database');
const account = db.Accounts;

//Post a Account
exports.create = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
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
    account.find({
      where :{
        username : req.body.username ,
        password : req.body.password 
      }
    }).then(function(device) {
      if (!device) {
          return 'not find';
      }
      else{
        let eingeloggteUser= device.dataValues ;
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
