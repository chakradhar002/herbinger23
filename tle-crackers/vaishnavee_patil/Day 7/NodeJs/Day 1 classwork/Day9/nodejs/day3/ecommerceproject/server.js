const empcontroller = require('../ecommerceproject')
const express = require('express')
const bodyParser = require('body-parser')

var app = express();

app.use( express.json());
app.use( express.urlencoded( { extended:true } ) );

app.use('/employee', empcontroller);



app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

