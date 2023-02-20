var express = require('express')
var ProducController = require('./Controller/ProductController');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/Product',ProducController)
app.listen(5000,()=>{
    console.log("Server listening at port 5000");
})