'use strict'

module.exports = function(app){

    const accounts = require('../controllers/account.controller');
    
    

    //Create a new Account
    app.post('/accounts/add', accounts.create);

    //Retrieve all Accounts
    app.get('/accounts', accounts.findAll);


    //Delete an Account with ID
    app.get('/api/accounts/:id', accounts.delete);
}
/* 
let express = require('express');
let router = express.Router();
 
//let customers = require('../controllers/customer.controller.js');
const accounts = require('../controllers/account.controller');

// Create a new Customer
router.post('/api/add', accounts.create);
 
// Retrieve all Customer
//router.get('/api/accounts', accounts.findAll);
router.get('/', (req, res) => res.send('Accounts'));
 
// Retrieve a single Customer by Id
//router.get('/api/accounts/:id', accounts.findOne);
 
// Update a Customer with Id
//router.put('/api/accounts', accounts.update);
 
// Delete a Customer with Id
//router.delete('/api/accounts/:id', accounts.delete);
 
module.exports = router; */
