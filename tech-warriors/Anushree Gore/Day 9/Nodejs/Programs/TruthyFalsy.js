//importing modules and dependencies
const http = require('http')
const express = require('express')

const app = express();

app.get('/', function(req, res) {
    let arr = [23, 0, "abc", false, true, NaN, 12, undefined, 70, true];

    function removeFalsy(arr) {
        let newArr = [];
        let cnt = 0;
        arr.forEach(element => {
            if (element) {
                newArr.push(element)
                cnt++;
            }
        });
        return ("Truthy values count in array:" + cnt);

    }
    res.send(removeFalsy(arr))
})
app.listen(3000, function(req, res) {
    console.log("Server is Running at 3000")
})