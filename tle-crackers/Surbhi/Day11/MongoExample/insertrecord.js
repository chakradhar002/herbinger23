const mongoose = require('mongoose');
mongoose.set("strictQuery",false);
mongoose.connect(
    'mongodb://127.0.0.1:27017/Herbinger', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number

    }
)

const User = mongoose.model('User', userSchema);

User.createCollection().then(function (collection) {
    console.log('collection is created');
});

//Record the record
var myobj = new User({ name: 'Surbhi Singh', age: 22 });
//save into database
myobj.save(function (err, myobj) {
    if (err) return console.error(err);
    console.log(myobj.name + " Saved to collection");
});


//update value
