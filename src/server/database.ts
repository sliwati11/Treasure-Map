
// DB connection parameters
import { dbconfig } from './config'; 
import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
 database: dbconfig.database,
 dialect: dbconfig.dialect,
 username: dbconfig.username,
 password: dbconfig.password,
 host: dbconfig.host,
 port: dbconfig.port
});
sequelize.authenticate().then(() => {
 console.log("Connected to DB");
})
.catch((err) => {
 console.log(err);
})