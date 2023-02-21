"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = (0, express_1["default"])();
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.use(body_parser_1["default"].json());
var PORT = 3000;
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/swapping.html');
});
app.post('/swapping', function (req, res) {
    var _a = req.body, number1 = _a.number1, number2 = _a.number2;
    number1 += number2;
    number2 = number1 - number2;
    number1 = number1 - number2;
    res.send("<h3>Swapping of the two numbers is ".concat(number1, " : ").concat(number2, "</h3>"));
});
app.listen(PORT, function () {
    console.log("Server running at PORT ".concat(PORT));
});
