/*
  Description: This is the setup of the nodeJS server.
  Author: Victor Godwin
*/

//CALL PACKAGES
var express = require('express');
var app = express();
var dotenv = require("dotenv")
var Router = require('./controllers/routes');
var connect = require('./models/db');
//RUN SERVER ON PORT 3000
var port = process.env.port || 3000;

//setup /api as root route
app.use('/api', Router);
app.get('/', (req, res) => res.status(200).send({ status: 200, message: 'Welcome to DressStore Online Store!' }));

dotenv.config();

//RUN SERVER ON PORT 3000
module.exports = start = async () => {
    try {
        await connect();

        app.listen(process.env.PORT, () => {
            console.log(`REST API on http://localhost:${process.env.PORT}/`);
        });
    } catch (e) {
        console.error(e);
    }
};
start();
module.exports = app;
