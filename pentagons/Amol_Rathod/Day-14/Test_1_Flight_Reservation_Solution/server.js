const flightReservationApisFile = require("./controller/flightReservationApis");

const express = require("express");

const app = express();

const PORT = process.env.PORT || 4040;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/flightreservation", flightReservationApisFile.router);

app.listen(PORT, () => {
  console.log(`\nServer is listening on http://localhost:${PORT}\n`);
});
