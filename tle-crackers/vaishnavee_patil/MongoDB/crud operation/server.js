//imports modules
let express = require("express");
let productController = require("../crud operation/Controller/productcontroller");
let bodyParser = require("body-parser");
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/product", productController);
//running a particular application on port
app.listen(3000, () => {
  console.log("Server Started at 3000");
});
