const express = require('express');
var router = express.Router();
const service = require('../Services/flightServices')
/**
 * @description create Flight details using post method
 */
router.post("/sign_up", service.sign_up);

/**
 * @description  Delete Flight by id using post method
 */
router.post("/reservationFlight", service.reservationFlight);

/**
 * @description get flight detais by source destination and date using post method
 */
router.post("/getFlightDetails", service.getFlightDetails);

/**
 * @description update servation
 */
router.post("/updateReservation", service.updateReservation);

/**
 * @description cancel servation
 */
router.post("/cancelReservation", service.cancelReservation);

module.exports = router;