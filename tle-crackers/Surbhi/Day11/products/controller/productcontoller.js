const express = require('express');
var router = express.Router();
const service = require('../service/productservice')

//post
router.post("/insertrecord",service.insertProductInfo);
//get
router.get("/getProduct",service.getProductList);
//getProduct by name
router.get("/getProductByName/:name",service.getProductByName);
//get product bt id
router.get("/getproductbytid/:id",service.getProductById);
//update product details
router.put("/updatecolor/:id",service.updateProductDetailsById);
//Delete product by their name
router.delete("/deletebyname/:name",service.deleteProductByName);


module.exports = router;
