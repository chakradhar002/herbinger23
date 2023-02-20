//importing modules and dependencies
const bodyparser = require('body-parser');
const express = require('express')

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/FizzBuzz.html')
})

app.post('/FizzBuzz', function(req, res) {
    let {
        num1
    } = req.body
    num1 = parseInt(num1)

    if (num1 % 3 === 0) {
        res.send(`Fizz`);
    } else
    if (num1 % 5 === 0) {
        res.send(`Buzz`)
    } else
    if (num1 % 3 === 0 && num1 % 5 === 0) {
        res.send(`FizzBuzz`);
    } else {
        res.send(`${num1} NAN - Not a number!! `)
    }
})
app.listen(4001, function() {
    console.log("Server running at 4001")
})