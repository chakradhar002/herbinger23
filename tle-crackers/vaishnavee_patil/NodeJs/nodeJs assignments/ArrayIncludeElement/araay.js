const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/array.html");
});

/**
 * this function will examine that array contains the number or not
 */
app.post("/arrayinclude", (req, res) => {
  let Number = req.body.number;
  Number = Number(Number);
  let array = [1, 2, 3, 4, 5];
  let checkelement = array.includes(Number);
  checkelement
    ? res.send(`The element ${Number} is PRESENT in the given array`)
    : res.send(`The element ${Number} is NOT PRESENT in the given array`);
});
/**
 * this will run file on port 3000
 */
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
