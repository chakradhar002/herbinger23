const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/swap.html");
});

/**
 * this function  will swap two variables and return newer values
 */
app.post("/swap", (req, res) => {
  let { first, second } = req.body;
  first = Number(first);
  second = Number(second);
  let temp = first;
  first = second;
  second = temp;
  res.send(`After swapping : ${first}, ${second}`);
});
/**
 * this will run file on port 3000
 */
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
