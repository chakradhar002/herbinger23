//install required module
let http = require('http')
var express = require('express');

const app = express();
//to swap two number
app.get('/', function (req, res) {
   let a = 10;
   let b = 20;
   let temp;

   temp = a;
   a = b;
   b = temp;

   res.send(`a = ${a} and b =${b}`)
})

app.listen(2020, function () {
   console.log('Server is listening on port http://localhost:2020');
})