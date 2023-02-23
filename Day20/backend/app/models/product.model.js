module.exports = mongoose => {
  var productschema = mongoose.Schema(
    {
      productID: String,
      productname: String,
      productdescritpion:String,
      quantity: String,
      unitprice: String
    });

    productschema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Product = mongoose.model("prodt", productschema);
  return Product;
};
