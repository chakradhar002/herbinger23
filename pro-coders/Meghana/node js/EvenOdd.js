//install required module
const bodyparser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
   extended: true
}));
//To check even or odd number
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/EvenOdd.html')
})

app.post('/EvenOdd', function (req, res) {
   let {
      num
   } = req.body;
   num = parseInt(num);

   if (num % 2 == 0) {
      res.send(`${num} : Even`)
   } else {
      res.send(`${num} : Odd`)
   }

})
app.listen(5005, function () {
   console.log("Server is Running at 5005")
})