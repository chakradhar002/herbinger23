const express = require('express');
var router = express.Router();
const service = require('../service/productService')

/**
 * @description:displaying the details of product
 */
router.post("/getAllProductlist", service.getAllProductlist);

/**
 * @description:Inserting the details of product
 */
router.post("/insertIntoProduct", service.insertIntoProduct);

/**
 * @description:find the product by id
 */
router.post("/getProductDetailsById", service.getProductDetailsById);

/**
 * @desciption : updating the product details
 */
router.post("/updateProductDetails", service.updateProductDetails);

/**
 *@description : deleting the product by id 
 */
router.post("/deleteProductById", service.deleteProductById);

module.exports = router;