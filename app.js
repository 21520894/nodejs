require('dotenv').config();
const express = require("express");
const path = require('path')
const configViewEngine = require('./src/config/viewEngine')
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
const webRoute = require('./src/routes/web')
const connection = require('./src/config/database')

app.use (express.json()) // for json
app.use (express.urlencoded({extended: true}))	// for form data


//config template engine
configViewEngine(app)
app.use('/',webRoute)
//config static file



app.listen(port,hostname,() => {
	console.log (`example app listening on port ${port}`)
})


