//install required module
const bodyparser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
   extended: true
}));

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/SpeedLimit.html')
})
//to check speed limit
app.post('/SpeedLimit', function (req, res) {
   let {
      speed
   } = req.body;
   speed = parseInt(speed);

   if (speed < 70) {
      res.send(`Good Driving`);
   } else {
      let diff = speed - 70;
      let point = Math.floor(diff / 5)

      if (point < 10) {
         res.send(`Speed Crossed Limit Penalty : ${point}`)
      } else {
         res.send(`Lincense suspended!!`)
      }
   }
})
app.listen(4003, function () {
   console.log(`Server running at 4003`);
})