const productcontroller=require('../PRODUCTS/controller/productcontoller');
const express=require('express')
const bodyParser = require('body-parser')


var app=express();

app.use( express.json());
app.use( express.urlencoded( { extended:true } ) );

//
app.use('/products', productcontroller);



app.listen(3004, () => {
    console.log('Express server started at port : 3004');
});

