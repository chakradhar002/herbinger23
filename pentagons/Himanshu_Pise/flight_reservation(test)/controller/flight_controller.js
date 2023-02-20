/**
 * @author:Himanshu Pise
 *
 */


const express = require('express');
var router = express.Router();
const service = require('../services/flight_service')


 /**
 * @description : make a reservation
 * @param {*} req
 * @param {*} res
 */
 router.post("/create_reservation",service.create_reservation);

 /**
 * @description : modify reservation
 * @param {*} req
 * @param {*} res
 */

 router.post("/modify_reservation/:id", service.modify_reservation);


 /**
 * @description : cancel reservation by given id
 * @param {*} req
 * @param {*} res
 */
 router.delete("/cancel_reservation/:id",service.cancel_reservationbyid);


 /**
 * @description :select food of customer choice from menu
 * @param {*} req
 * @param {*} res
 */
 router.post("/get_menudetails",service.get_menudetailsbyitem);


 /**
 * @description :select seats of customer choice from seat map
 * @param {*} req
 * @param {*} res
 */
router.get("/seats_available/:seatno",service.seat_available);

/**
 * @description :Customers able to sign-up to the application
 * @param {*} req
 * @param {*} res
 */
router.post("/signup",service.signup);


/**
 * @description :customers able to search for available between source and destination on customer specified dates
 * @param {*} req
 * @param {*} res
 */
router.get("/sourcedestination",service.sourcedestination);

module.exports = router;







