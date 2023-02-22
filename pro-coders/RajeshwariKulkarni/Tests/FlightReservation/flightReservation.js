const express = require('express')
var router = express.Router()

const service = require('../services/flightReservationService')

/**
 * All get methods here :displaying table
 */
router.get('/getallpersons', service.getAllPersons);
router.get('/searchflight',service.searchFlight);


/**
 * Post methods : creating table
 */
router.post('/makereservation', service.makeReservation);
router.post('/signup',service.signUp);
router.post('/seatbooking',service.seatBooking);


/**
 * Put methods : updating table
 */
router.put('/modifyreservation', service.modifyReservation);

/**
 * delete methods :deleting table
 */
router.delete('/cancelreservation', service.cancelReservation);


/**
 * exporting router modul
 */
module.exports = { router };