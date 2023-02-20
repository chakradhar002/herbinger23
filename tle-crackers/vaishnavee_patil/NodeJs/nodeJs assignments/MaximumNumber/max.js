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
  res.sendFile(__dirname + "/maximum.html");
});

/**
 * this function will return maximum number from accepted three numbers
 */
app.post("/max", (req, res) => {
  let { variable1, variable2, variable3 } = req.body;
  variable1 = Number(variable1);
  variable2 = Number(variable2);
  variable3 = Number(variable3);
  function max_of_three(variable1, variable2, variable3) {
    max_val = 0;
    if (variable1 > variable2) {
      max_val = variable1;
    } else {
      max_val = variable2;
    }
    if (z > max_val) {
      max_val = variable3;
    }
    return max_val;
  }
  max_of_three(1, 5, 10);
  max_of_three(0, -10, -20);
  res.send(`Maximum Number is : ${max_val}`);
});
/**
 * this will run file on port 3000
 */
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
