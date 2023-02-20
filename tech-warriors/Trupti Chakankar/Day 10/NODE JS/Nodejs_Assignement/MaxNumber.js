//install required module
const bodyparser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
   extended: true
}))

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/MaxNumber.html')
})
//to check maximum number
app.post('/maxnumber', function (req, res) {
   let {
      num1,
      num2
   } = req.body
   num1 = parseInt(num1)
   num2 = parseInt(num2)

   let max = 0;
   if (num1 > num2) {
      max = num1;
   } else {
      max = num2;
   }
   res.send(`Max Number : ${max}`)
})
app.listen(4000, function () {
   console.log("Server runing at 4000")
})