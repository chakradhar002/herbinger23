const { Router } = require('express');
const express = require('express');
var router = express.Router();
const service = require('../service/service')
//check controller is connected or not
console.log('controllerConnected!:)');
//cancel Resrvation
router.delete("/deletereservation", service.deleteReservation);

//Get all flight details
router.get("/getflightdetails", service.getFlightList);

//get reservation using reservation id
router.get("/getreservation", service.getReservation);

//get seat details which is availbale using flight_id
router.get("/getseatdetails", service.getseatList);
//get list of all food
router.get("/getfooddetails", service.getFoodMenu);
//get flightDetails
router.get("/getflightdetails1", service.getFlightBySourceDestination);
//Sign-up customer
router.post("/postCustomer", service.insertCustomer);
//make a reservation
router.post("/postreservation", service.insertReservation);
// update seat in reservation
router.put("/updatereservation", service.updateReservation);





module.exports = router;