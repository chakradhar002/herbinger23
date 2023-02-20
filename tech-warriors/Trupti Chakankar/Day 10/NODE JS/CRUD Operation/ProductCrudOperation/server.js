/**
 * @author:Trupti Chakankar
 */
//importing liberaries and dependencies
const express = require('express')
const bodyparser = require('body-parser');
const app = express();

//controller file path
const productcontroller = require('./Controller/productcontroller');

app.use(express.json());
app.use(express.urlencoded({
   extended: true
}));

app.listen(3032, function () {
   console.log("Server is running at 3032");
})

app.use('/product', productcontroller);