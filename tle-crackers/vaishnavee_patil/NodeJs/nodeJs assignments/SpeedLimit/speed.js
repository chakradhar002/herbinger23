const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/speed.html");
});

/**
 *this function will be able to display either the enterd speed is inside the limit or exceed 
 */
app.post("/speed", (req, res) => {
  let { speed } = req.body;
  let { limit } = req.body;

  if (speed > limit) {
    return res.send(`Your are crossing the speed limit of ${limit}`);
  } else {
    return res.send(`Your are maintaining the speed limit of ${limit}`);
  }
});
/**
 * this will run file on port 3000
 */
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
