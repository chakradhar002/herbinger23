const flightcontroller=require('./controller/flightcontroller');
const express=require('express')
const bodyParser = require('body-parser')

var app=express();

app.use( express.json());
app.use( express.urlencoded( { extended:false } ) );

app.use('/flight', flightcontroller);



app.listen(3005, () => {
    console.log('Express server started at port : 3004');
});

