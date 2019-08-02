const express = require('express');
const routerr =  express.Router();
const Gig = require('../models/Gig');

//router.get('/',(re,res) => res.send('GiGs'));

routerr.get('/', (req, res) => 
    Gig.findAll()
    .then( gigs =>{
        console.log(gigs);
        //res.json(Gig)
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));

    //Add a Gig
routerr.get('/add',(req, res)=>{
    const data = {
        title : 'JIJI',
        technologies: 'jwana',
        budget:'hadid',
        description:"dgkljsdklgj srklgjilsdjg lsujdfgiluweriojsdklc",
        contact_email:"user@gmail.com"
    }

    let { title, technologies, budget, description, contact_email } = data;
    console.log('Data: '+data);
    //insert into table
    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email
    })
    .then( account => res.redirect('/gigs'))
    .catch(err => console.log(err));

});

    module.exports= routerr;