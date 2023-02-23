module.exports = app => {
  const productconstoller = require("../controllers/product.controller.js");

  var router = require("express").Router();
 console.log('from roer')
  // Create a new product
  router.post("/product",productconstoller.createpr );
  app.use("/api",router)
}
