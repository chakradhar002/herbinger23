const express=require('express');
var router=express.Router();
const service=require('../Service/flightservice');

//routing to the page where we can add user details for signup
router.post("/postdata", service.insertdata);

//routing to the page where we can get flight details
router.get("/getdata", service.getflightdetails);


//routing to the page where we can make reservation
router.post("/makereserve", service.makereservation);

//routing to the page where we can see reservation
router.get("/seereserve", service.seereservation);

//
router.post("/do",service.reservetable);

//routing to the page where we can update the records
router.put("/updatedata",service.updatebooking);

//routing to the page where we can cancel the reservation
router.put("/cancel",service.cancelbooking);

module.exports = router;