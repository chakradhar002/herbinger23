const service = require('../service/productServices')
const express = require('express')
const router = express.Router();

router.get('/getProductByname',service.getProductByname);

router.get('/getProductById',service.getProductById);

router.post('/NewProduct',service.CreateProduct);

router.delete('DeleteProduct',service.deleteProduct);

router.put('UpdateDocument',service.updateProductById);

module.exports = router;