const express = require("express");

const router = express.Router();

const flightReservationServicesFile = require("../services/flightReservationServices");

// new customer singup
router.post(
  "/signupfornewcustomer",
  flightReservationServicesFile.signupForNewCustomer
);

// display all customer details
router.get(
  "/getallcustomerdetails",
  flightReservationServicesFile.showAllCustomerDetails
);

// find a single customer by its id
router.put(
  "/findcutomerbyid/:email",
  flightReservationServicesFile.checkForExistingCustomer
);

// do reservation by using email id and flight id (fid)
router.put(
  "/reservation/:email/:fid",
  flightReservationServicesFile.reservation
);

// search all the flights between given source and destination
router.get(
  "/searchflightbetweensourceanddestination",
  flightReservationServicesFile.searchFlightBetweenSourceAndDestination
);

// cancel flight using email and flight id (fid)
router.put(
  "/cancelflight/:email/:fid",
  flightReservationServicesFile.cancelReservation
);

module.exports = { router };
