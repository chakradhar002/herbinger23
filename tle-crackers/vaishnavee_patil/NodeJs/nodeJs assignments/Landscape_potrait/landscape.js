const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/landscape.html");
});

/**
 * this function will display page orientation
 */
app.post("/landscape", (req, res) => {
  let { height } = req.body;
  let { width } = req.body;
  height = Number(height);
  width = Number(width);
  if (width == "" || height == "") {
    return res.send("Invalid input");
  }
  if (width > height) {
    return res.send("Your page orientation is Landscape");
  } else {
    return res.send("Your page orientation is Potrait");
  }
});
/**
 * this will run file on port 3000
 */
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
