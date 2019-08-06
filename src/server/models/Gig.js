'use strict';

const Sequelize = require('sequelize');
const db  = require('../database');

const Gig = db.sequelize.define('gigs', {

    title:{
        type : Sequelize.STRING,
        field : 'title'
    },
    technologies:{
        type : Sequelize.STRING
    },
    description:{
        type : Sequelize.STRING
    },
    contact_email:{
        type : Sequelize.STRING
    }

})


module.exports = Gig;