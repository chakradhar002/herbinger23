//importing modules and dependencies
const bodyparser = require("body-parser")
const express = require("express")

const app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/Landscape.html')
})

app.post('/Lanscape', function(req, res) {
    let {
        width,
        height
    } = req.body

    width = parseInt(width);
    height = parseInt(height);

    if (width > height) {
        res.send(true)
    } else {
        res.send(false)
    }
})

app.listen(4001, function() {
    console.log("Server runing at 4001")
})