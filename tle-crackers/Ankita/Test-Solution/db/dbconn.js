var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Test_1234",
  database: "flight_database",
});

connection.connect(function (error) {
  if (error) throw error;
  console.log("Connected!:)");
});

module.exports = { connection };
