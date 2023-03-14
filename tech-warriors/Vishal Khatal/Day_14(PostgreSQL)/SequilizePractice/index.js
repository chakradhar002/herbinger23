const express = require('express')
const app = express()
var bodyParser = require("body-parser");
let person = require("../Sequelize/user")

app.use(bodyParser.json())

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// person.sync();

app.listen(3000,()=>{
console.log("server will work on http://localhost:3000");
}
);