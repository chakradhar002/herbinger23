const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

/**
 * @description: Database Connection 
 */

mongoose.connect('mongodb://localhost/Product', {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
   console.log("Connection Successful");
}).catch((e) => console.log("No connection"))

const userSchema = new mongoose.Schema({
   name: String,
   price: Number,
   category: String,
   description: String
})
module.exports = mongoose.model('Product', userSchema)