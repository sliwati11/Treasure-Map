/* const Sequelize = require('sequelize');

// Option 1: Passing parameters separately


module.exports = new Sequelize('postgres', 'postgres', 'Overdrive1819', {
  host: 'localhost',
  dialect: 'postgres',
  freezeTableName: true,
   operatorsAliases : false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle:1000
},
}); */

'use strict'

const env = require('./config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host : env.host,
  dialect : env.dialect,

  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models / tables
db.Accounts = require('./models/account.model')(sequelize, Sequelize);

module.exports = db;
