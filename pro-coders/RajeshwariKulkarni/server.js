var express = require('express');
var bodyparser = require('body-parser');
var controllerFlight = require('../Flight Reservation/controller/flightReservation');
var port = 3000;

var app = express()
/**
 * used to convert the body part into json
 */
app.use(express.json());
app.use(express.urlencoded({extended : true}));
/**
 * frst end point
 */
app.use('/flight',controllerFlight.router);

/**
 * setting port id
 */
app.listen(port , ()=>{
    console.log("server in running on  ${port}");
})