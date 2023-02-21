const flightcontroller = require('./flightcontroller/flightcontroller')
const express = require('express');
const bodyParser = require('body-parser')

var app = express();

app.use(express.json())
app.use(express.urlencoded({ extended : true}));
//linking with controller
app.use('/flightreservation',flightcontroller.router)

app.listen(3001,() =>{
    console.log("Express server started at port :3001 ")
});