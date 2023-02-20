let express = require("express");
let router = express.Router(); // route refers to how applicatins' endpoint url responds to client request
let service = require("../service/productservice");
//this will route to the page where we can get all product list
router.get("/getproductlist", service.getproductlist);
//this will route to the page where we can get single product by id
router.get("/getproductbyid/:id", service.getproductbyid);
//this will route to the page where we can create all product list
router.post("/createproductlist", service.createproduct);
//this will route to the page where we can update product list
router.put("/updateproductlist/:id", service.updateproduct);
//this will route to the page where we can delete product by id
router.delete("/deleteproduct/:id", service.deleteproduct);
//this will route to the page where we can delete all records
router.delete("/deleteall", service.deleteallproduct);
module.exports = router;
