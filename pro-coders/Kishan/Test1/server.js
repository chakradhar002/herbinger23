const flightcontroller = require('./controller/flightcontroller')
const express = require('express')
const bodyParser = require('body-parser')

var app = express();

app.use( express.json());
app.use( express.urlencoded( { extended:true } ) );

app.use('/flight', flightcontroller);

/**
 * @description Port number 
 */
app.listen(3005, () => {
    console.log('Express server started at port : 3005');
});

