const env =
{
    username : "postgres",
    password : "Overdrive1819",
    database : "postgres",
    host : "localhost",
    dialect : "postgres",
    
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:1000
    },
};

module.exports = env;