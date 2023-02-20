const express = require('express');
const router = express.Router();

const service = require('../Service/productservice')

//show all product details
router.get("/getallproductlist", service.getAllProductlist);

//insert into product details
router.post("/insertproduct", service.createProduct);

//show product by id passed through postman
router.get('/getproductbyid/:id', service.getbyid);

//update product by id 
router.put('/updateproduct/:id', service.updateproduct);

//delete product by id passed through postman
router.delete('/deleteproductbyid/:id', service.deleteproductbyid);

//delete all product from product details
router.delete('/deleteallproduct', service.deleteallproduct);

module.exports = router;