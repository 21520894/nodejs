require('dotenv').config();
const mysql2 = require('mysql2/promise');

//create connection to DB   
const connection = mysql2.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,      //default 3306
	user: process.env.DB_USER,       
	password: process.env.DB_PASSWORD, //default empty
	database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection;