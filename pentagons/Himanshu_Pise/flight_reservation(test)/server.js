/**
 * @author:Himanshu Pise
 *
 */

const flight_controller = require('../flight_reservation(test)/controller/flight_controller')
const express = require('express')
const bodyParser = require('body-parser')

var app = express();

app.use( express.json());
app.use( express.urlencoded( { extended:true } ) );

//load the controller
app.use('/flights', flight_controller);
app.listen(2000, () => {
    console.log('Express server started at port : 2000');
});
