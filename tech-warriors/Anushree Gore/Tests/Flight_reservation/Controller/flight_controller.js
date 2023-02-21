const express = require('express');
var router = express.Router();
const service = require('../Service/flight_service');

//to insert person record into db.
router.post("/insertPerson", service.insertPerson);

//to get all the details of person signed up.
router.get("/getPersonList", service.getPersonList);

//to get the flight details from db.
router.get("/getFlightDetails", service.searchFlight);

//to post booking details.
router.post("/insertBookingDetails", service.bookingFlight);

//to get the booking list of all person.
router.get("/getBookingList", service.getBookingList);

//to get the reservation details of a particular passenger.
router.get("/showReservation", service.showReservation);

//to update the flight booking.
router.put("/updateBooking", service.updateBooking);

//to cancel the flight booking.
router.put("/cancelBooking", service.cancelBooking);

module.exports = {
    router
};