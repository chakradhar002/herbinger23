const express = require('express')
const bodyparser = require('body-parser');
var app = express();
const airline_Controller = require('../AIrline_Test/controller/airlineController') // need change

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(bodyparser.json())

app.use('/airline',airline_Controller)

// creating server
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});
