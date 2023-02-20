/**
 * @description It includes all the routers
 */

const express = require('express');
var router = express.Router()
const service = require('../service/TestServices')

//get flight details
router.get("/getFlightDetails",service.getAllFlightDetails)

//Search flights by Source and destination
router.get("/getBySourceDestination/:sourceairport/:destinationairport",service.searchBySourceDestination)

//Create new person
router.post("/CreateNewPerson",service.createNewPerson)

//reservation
router.post("/Reservation",service.reservation)

//Cancelreservation
router.put("/CancelReservation/:rid/:passenger_id",service.cancelReservation)

//Booking controller
router.post("/Booking",service.booking)

module.exports = router