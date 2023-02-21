const flightController = require('../Flight_reservation/controller/flight_controller');
const express = require('express');
const bodyParser = require('body-parser'); 
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/flight', flightController);
app.listen(3000, () => {
    console.log('Flight Server running at : 3000');
})