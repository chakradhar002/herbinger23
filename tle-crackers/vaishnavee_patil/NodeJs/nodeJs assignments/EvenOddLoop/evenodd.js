const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/evenodd.html");
});

/**
 * this function will display that number is even or odd
 */
app.post("/evenodd", (req, res) => {
  let { variable } = req.body;
  variable = Number(variable);
  if (variable % 2 == 0) {
    return res.send(`The number is even`);
  } else {
    return res.send(`The number is odd`);
  }
});
/**
 * this will run file on port 3000
 */
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
