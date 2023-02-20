/**
 * @author:Trupti
 */

const express = require('express');
let router = express.Router();
const service = require('../flightservice/flightservice');

//insert persons details
router.post('/signup', service.insertpersondetails);

//show persons details
router.get('/getpersonlist', service.getpersonlist);

//search for flight
router.get('/searchflight', service.searchflight);

//booking flight
router.post('/booking', service.booking);

//insert reservation details
router.get('/reservation', service.reservation);

//update booking details
router.put('/updatebooking', service.updatebooking);

//cancel flight
router.delete('/cancelbooking', service.cancelbooking);

module.exports = {
	router
};