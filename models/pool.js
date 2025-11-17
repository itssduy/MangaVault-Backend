const {Pool} = require("pg");

module.exports = new Pool({
    // host: process.env.HOST,
    // user: process.env.USER,
    // database: process.env.DB,
    // password: process.env.PASSWORD,
    // port: process.env.DBPORT,
    connectionString: process.env.DB_URL,
    ssl: { rejectUnauthorized: false }

//    ssl: '',
})