'use strict'

module.exports = function(app){

    const accounts = require('../controllers/account.controller');
    const maps = require('../controllers/map.controller');
    const locations = require('../controllers/location.controller');

    //Create a new Account
    app.post('/accounts/add', accounts.create);

    //Retrieve all Accounts
    app.post('/accounts', accounts.findAll_control);
    app.get('/accounts', accounts.findAll_control);

    app.get('/accounts/1', accounts.findOne);

    app.post('/accounts/authenticate', accounts.authenticateUser);
    app.get('/accounts/authenticate', accounts.authenticateUser);
    
    //Delete an Account with ID
    //TODO
    app.get('/api/accounts/:id', accounts.delete);



    //Create a new Map for a User
    app.post('/maps/add', maps.create);

    // Retrieve all Maps
    app.get('/maps', maps.findAll);

    app.get('/maps/:id', maps.findById);

    //Get Map by name
/*     app.get('/maps/:name', maps.findByName);
 */
    //Create a new location for a Map
    app.post('/locations/add', locations.create);

    // Retrieve all Locations
    app.get('/locations', locations.findAll);

    //Add Location to Map
    app.get('/locations/:id', locations.findById);

  

}
