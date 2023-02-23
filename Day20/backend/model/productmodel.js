var mongoose=require('mongoose');

var productSchema = new mongoose.Schema({
	productID: string,
    productname: string,
    productdescritpion: string,
    quantity: string,
    unitprice: string
});

module.exports = mongoose.model('prodt', productSchema);
