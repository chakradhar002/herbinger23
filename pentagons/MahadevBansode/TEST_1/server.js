const express = require("express");
let flightController = require("./Controller/flightController");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/flight", flightController);

app.listen(3030, () => {
  console.log(`Application is listening on port 3030`);
});
