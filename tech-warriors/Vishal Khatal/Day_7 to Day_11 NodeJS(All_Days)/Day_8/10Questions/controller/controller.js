const express = require("express");
var router = express.Router()
const service = require("../service/service");
// this is all routers 
router.post("/swapping",service.swapping);
router.post("/Maxof2",service.Maxof2);
router.post("/fizzbuzz",service.fizzbuzz);
router.post("/oddevenloop",service.oddevenloop);
router.post("/primeTillRange",service.primeTillRange);
router.post("/grade",service.grade);
router.post("/checkInArray",service.checkInArray);
router.post("/speedLimit",service.speedLimit);
router.post("/sumofmultipleof_3_5",service.sumofmultipleof_3_5);
module.exports = router;