const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/prime.html");
});

/**
 * this function will measure either the number is prime or not
 */
app.post("/prime", (req, res) => {
  let { number } = req.body;
  let PrimeNumber = number;
  let temp = 0;
  for (let i = 2; i <= PrimeNumber; i++) {
    if (PrimeNumber % i == 0) {
      temp++;
    }
  }
  if (temp == 1) {
    return res.send(`The number is PRIME`);
  } else {
    return res.send(`The number is NOT PRIME`);
  }
});
/**
 * this will run file on port 3000
 */
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
