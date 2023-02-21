/**
 * @author: Anushree Gore.
 * @description: This file contains server connection and code.
 */

//importing libraries and dependencies.
const flightController = require('../Flight_reservation/Controller/flight_controller');
const express = require('express');
const bodyParser = require('body-parser');

var app = express()

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//Linking of flight controller
app.use('/flightreservation', flightController.router)

app.listen(3000, () => {
    console.log('Express server started at port: 3000');
});