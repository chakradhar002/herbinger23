const mongoose = require('mongoose');
mongoose.set("strictQuery",false);
mongoose.connect(
    'mongodb://127.0.0.1:27017/Ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(()=>{
    console.log("connection successful");
}).catch((e)=>console.log("no connection"))

//Defining product schema
const productSchema = new mongoose.Schema(
    {
        name:String,
        category:String,
        price:Number,
        color:String,
        description:String
    }
)

const product = mongoose.model('product', productSchema);



module.exports = {product}

