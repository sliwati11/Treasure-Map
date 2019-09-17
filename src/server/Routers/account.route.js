'use strict'

module.exports = function(app){

    const accounts = require('../controllers/account.controller');
    const maps = require('../controllers/map.controller');
    

    //Create a new Account
    app.post('/accounts/add', accounts.create);

    //Retrieve all Accounts
    app.post('/accounts', accounts.findAll_control);
    app.get('/accounts', accounts.findAll_control);

    app.get('/accounts/1', accounts.findOne);

    app.post('/accounts/authenticate', accounts.authenticateUser);
    app.get('/accounts/authenticate', accounts.authenticateUser);
    
    //Delete an Account with ID
    app.get('/api/accounts/:id', accounts.delete);



    //Create a new Map for a User
    app.post('/maps/add', maps.create);

}
