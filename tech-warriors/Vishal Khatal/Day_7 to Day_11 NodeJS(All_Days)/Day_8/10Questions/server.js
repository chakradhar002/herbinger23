const express = require('express')
const controller = require('../10Questions/controller/controller')
const bodyParser = require('body-parser')

var app = express();

app.use( express.json());
app.use( express.urlencoded( { extended:false } ) );

app.use('/10Questions', controller);



app.listen(3030, () => {
    console.log('Express server started at port : 3030');
});

