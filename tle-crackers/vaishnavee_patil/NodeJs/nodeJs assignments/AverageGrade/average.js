const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/averageGrade.html");
});

/**
 * this function will calculate the average grade of value enterd
 */
app.post("/averagegrade", (req, res) => {
  let { no1, no2, no3, number4 } = req.body;
  let sub1 = Number(no1);
  let sub2 = Number(no2);
  let sub3 = Number(no3);
  let sub4 = Number(no4);
  let total = sub1 + sub2 + sub3 + sub4;
  let avg = (total / 400) * 100;
  if (avg <= 70) {
    return res.send(`Grade D`);
  } else if (avg < 80) {
    return res.send(`Grade C`);
  } else if (avg < 90) {
    return res.send(`Grade B`);
  } else {
    return res.send(`Grade A`);
  }
});
/**
 * this will run file on port 3000
 */
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
