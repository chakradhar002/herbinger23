var mysql = require("mysql");

//connecting to mysql
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Test_1234",
  database: "flight_database",
});

try {
  connection.connect(function (error) {
    if (error) throw error;
    console.log("Connected!:)");
  });
} catch (e) {
  throw new Error("error in connecting database");
}

module.exports = { connection };
