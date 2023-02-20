const flightController = require('../flight/controller/flightController')
const express = require('express')
const bodyparser = require('body-parser')
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//load the controller from here
app.use('/flight', flightController)

app.listen(3080, () => {
    console.log('Express server started at port : 3080');
});