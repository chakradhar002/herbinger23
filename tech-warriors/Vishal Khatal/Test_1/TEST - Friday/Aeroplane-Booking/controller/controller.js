let express = require("express");
let router = express.Router();// route refers to how applicatins' endpoint url responds to client request
let service = require("../service/service")

//this router will route you to services
router.post("/searchFlight_details",service.searchFlight_details);

router.post("/signup",service.signup);

router.post("/makeFlightReservation",service.makeFlightReservation);

router.put("/updatePersonInfo/:id",service.updatePersonInfo);

router.put("/flightcancellation/:id",service.flightcancellation);

router.put("/myReservation/:person_id",service.myReservation);

module.exports = router;
