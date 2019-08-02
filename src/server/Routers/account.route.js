'use strict'

module.exports = function(app){
    const accounts = require('../controllers/account.controller');

    //Create a new Account
    app.post('/api/add', accounts.create);

    //Retrieve all Accounts
    app.get('/api/accounts', accounts.findAll);

}
