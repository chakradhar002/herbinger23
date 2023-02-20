const { Router } = require("express");
const express = require("express");
const { body } = require("express-validator");
var router = express.Router();
const service = require("../services/flightServices");

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
router.get("/searchairline", service.searchFlight);
router.post("/seatbook", service.seatBooking);
router.put("/updateticket", service.updatebookingById);
router.get("/getall", service.gerallUsers);
router.put("/updatestatus", service.cancelBooking);
module.exports = router;
