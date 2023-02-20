const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://127.0.0.1:27017/Herbinger', {
    useNewUrlParser: true,
    useUnifiedTopology:true
}
)
const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number

    }
)

const User=mongoose.model('User',userSchema);

User.createCollection().then(function(collection) {
    console.log('collection is created');
});