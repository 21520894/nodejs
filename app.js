require('dotenv').config();
const express = require("express");
const path = require('path')
const configViewEngine = require('./src/config/viewEngine')
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
const webRoute = require('./src/routes/web')
const mysql2 = require('mysql2')

//config template engine
configViewEngine(app)
app.use('/test',webRoute)
//config static file



app.listen(port,hostname,() => {
	console.log (`example app listening on port ${port}`)
})

const connection = mysql2.createConnection({
	host: 'localhost',
	port: 3307,
	user: 'root',
	password: '123456',
	database: 'NODEJSDB'
});

connection.query(
	'SELECT * FROM users',
	function(err,result,fields){
		console.log(">>>result = ",result)
		console.log(">>>>fields = ",fields)
		//console.log(">>>>err = ",err)
	}
);

