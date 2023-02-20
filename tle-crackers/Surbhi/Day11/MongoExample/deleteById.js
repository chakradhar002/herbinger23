const mongoose = require('mongoose');
mongoose.set("strictQuery",false);
mongoose.connect(
    'mongodb://127.0.0.1:27017/Herbinger', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection sucessfully");
}).catch((e)=>console.log("no connection"+e))
//Defining user schema
const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number

    }
)
//Defining user schema model
const User=mongoose.model("User",userSchema);

const deleteDoc = async ()=>{

    const doc = await User.findById('63e6124204fb543dc35296e6');

    // const output = await doc.update({name:"tom"})
    // console.log(output);
   const deletedItem = await doc.deleteOne({_id:'63e6124204fb543dc35296e6'})
    console.log("Deleted" +deletedItem);

}
deleteDoc();
