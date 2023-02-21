let mysql = require("mysql2/promise");
let con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Test_1234",
    database: "test1"
});

module.exports = con;