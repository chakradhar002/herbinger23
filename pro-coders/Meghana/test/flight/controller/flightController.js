const express = require('express');
var router = express.Router();
const service = require('../services/flightServices');

//router for sign up 
router.post("/signup", service.signup);

//router for getting flight details information
router.get("/displayFlightDetails", service.displayFlightDetails);

//router for searching the flight details
router.post("/searchflightdetails", service.searchflightdetails);

//router for book the flight
router.post("/bookflight", service.bookflight);


//router for canceling the reservation
router.put("/cancelReservation", service.cancelReservation);


router.post("/getBookingDetails", service.getBookingDetails);
module.exports = router;