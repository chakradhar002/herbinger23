/*
 * this is the controller file which will give all routes
 *
 */
let express = require("express");
let router = express.Router();

let service = require("../services/productServices");

//this will list out all the product list
router.get("/getproduct", service.getallproducts);

//this will list out the particular product
router.get("/getproductbyid/:id", service.getproductbyid);

//this will add the products in database
router.post("/addproduct", service.addproduct);

//this will update the particular product
router.put("/updateproductbyid/:id", service.updateProductById);

//this will delete the product using id
router.delete("/deletebyid/:id", service.deleteByid);

module.exports = router;
