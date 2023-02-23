

const db = require("../models");


const Product = db.product1

// Create and Save a new Product
exports.createpr = (req, res) => {

  // Create a Product
  const product2 = new Product({
    productname: req.body.productname,
    productdescritpion: req.body.productdescritpion,
    quantity:req.body.quantity,
    unitprice:req.body.unitprice
   
  });

  // Save product in the database
  product2.save(product2).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product."
      });
    });
};

