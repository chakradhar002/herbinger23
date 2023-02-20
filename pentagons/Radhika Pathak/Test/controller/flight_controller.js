const express = require('express');
var router = express.Router();
/**
 * @description craeting a service to call a logic
 */
const service = require('../service/flight_service');

// get method to display the records of all person 
router.get('/getPersondetails',service.getDetails);

//sign up the application //
router.post('/signUp',service.signup);

//to make a reservation
router.post('/makeReservation',service.doreservation);

//to modify a reservation
//router.put('/modifyReservation');

//search for a flight
router.get('/searchaFlight',service.getFlight);

//select a food
router.get('/checkFood',service.selectFood);

//search a seat
router.get('/chooseSeat',service.searchSeat);

//to cancel a reservation
router.delete('/deleteReservation/:id',service.deleteBooking);

module.exports =router;