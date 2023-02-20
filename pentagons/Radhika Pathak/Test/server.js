const flight_controller = require('../test/controller/flight_controller');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

/**
 * @description loading the controller by specifying the end point
 */
app.use('/flight',flight_controller);

app.listen(2020,()=>{
    console.log("Server started at port 2020");
});