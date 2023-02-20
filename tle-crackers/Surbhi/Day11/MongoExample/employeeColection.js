const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://127.0.0.1:27017/Herbinger', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
const employeeSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        address: String

    }
)

const Employee = mongoose.model('Employee', employeeSchema);

Employee.createCollection().then(function (collection) {
    console.log('collection is created');
});