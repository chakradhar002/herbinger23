const signUpController = require("./controller/flightController");
const express = require("express");
const bodyparser = require("body-parser");
var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/signup", signUpController);

app.listen(3000, () => {
  console.log("Express server started at port : 3000");
});
