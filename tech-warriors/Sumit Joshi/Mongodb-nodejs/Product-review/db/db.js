const mongoose = require('mongoose');
const { float } = require('webidl-conversions');
mongoose.set('strictQuery',false)

mongoose.connect('mongodb://localhost:27017/harbinger',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connection successful');
}).catch((e)=>console.log("Connection unsccessful"))

const Schema = new mongoose.Schema({
    name : String,
    price : Number,
    color : String
});

const user = mongoose.model('products',Schema);

user.createCollection().then(function(collection){
    console.log("Collection is created");
}).catch(()=>{
    console.log("Not created collection ?");
})

module.exports = {user}
