const TestController = require('./Controller/TestController');
var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//load controller from here
app.use('/Test',TestController);
app.listen(3000,()=>{
    console.log("Express server staarted at port 3000");
})