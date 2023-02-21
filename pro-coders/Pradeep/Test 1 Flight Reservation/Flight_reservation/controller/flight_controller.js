const express = require('express');
var router = express.Router();
const service = require('../Service/flight_service');

router.get('/getFlightList', service.getFlightList); 

router.get('/getPassangerList', service.getPassangerList);

router.get('/showAllBooking', service.showAllBooking);

router.post('/getBookingById', service.getBookingById);

router.post('/addPassanger', service.addPassanger);

router.post('/createBooking', service.createBooking);

router.post('/getPassangerByEmail', service.getPassangerByEmail);

router.post('/masterSearchAPI', service.masterSearchAPI);

router.post('/updateBooking', service.updateBooking); 

module.exports = router;