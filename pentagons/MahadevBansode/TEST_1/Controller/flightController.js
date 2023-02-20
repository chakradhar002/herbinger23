/**
 * studentController is used to call the service method to performed specified operations.
 */
const express = require("express");
let router = express.Router();
const service = require("../Service/flightservice");
//using get Request
router.get("/getflightlist", service.getFlightsList);

//using postRequest
router.post("/postcreatecustomer", service.createCustomer);

//using PostRequest
router.post("/postcreatereservation", service.createReservation);

//using put method;
router.put("/putmodifyreservation/:rid", service.modifyReservation);

//using delete method
router.delete("/cancelreservation/:rid", service.cancelReservation);

//using put method : select by studentdetails id
router.get("/getreservationdetails/:rid", service.getReservationDetails);

//using put method : select by studentdetails Name
router.get("/getmealmenu", service.getMealMenu);

module.exports = router;
