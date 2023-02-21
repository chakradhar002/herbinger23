const { Router } = require("express");
const express = require("express");
const { body } = require("express-validator");
var router = express.Router();
const service = require("../services/flightServices");

/* register */ 
router.post(
  "/signup",
  [
    body("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
    body("password", "The Password must be of minimum 4 characters length")
      .notEmpty()
      .trim()
      .isLength({ min: 4 }),
  ],
  service.signUpPerson
);

// search the flights
router.get("/searchairline", service.searchFlight);

//ticket booking
router.post("/seatbook", service.seatBooking);

//changes in booking
router.put("/updateticket", service.updatebookingById);

//get all registered users
router.get("/getall", service.gerallUsers);

//cancel the bookings
router.put("/updatestatus", service.cancelBooking);

module.exports = router;
