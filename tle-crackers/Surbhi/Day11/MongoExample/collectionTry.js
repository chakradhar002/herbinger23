
var mongoose= require('mongoose');
var url = "mongodb://localhost:27017/";

mongoose.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Harbinger");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});