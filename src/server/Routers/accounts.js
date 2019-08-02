const express= require("express");
const router = express.Router();
const Account= require('../models/account.model');
const db = require('../database');

/* router.get('/hi', (req, res) => {
    const data = {
        name : 'JIJI',
        firstname: 'jwana',
        lastname:'hadid'
    }
    let { name, firstname, lastname } = data;
    res.send(firstname+' ' +lastname+" account ");
}); */

/* router.get('/', (req, res) => 
Account.findAll()
    .then( Account =>{
        //console.table(Account);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));


//Add a Account
router.get('/ad',(req, res)=>{
    const data = {
        username : 'lulu',
        email: 'diana@gmail.com'
    }

    let { username, email } = data;
    //console.table('Data: '+data);
    //insert into table
    Account.create({
        username,
        email
    })
    .then( account => res.redirect('/user'))
    .catch(err => console.log(err));

});

module.exports = router; */

module.exports = function(app){
    const accounts = require('../');

}