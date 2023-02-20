var mysql = require('mysql2/promise');
/**
 * @author:Meghana
 */
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "Test_1234",
    database: 'flight_database'
});
// connection.connect(function(err){
//     if(err) throw err;
//     console.log("Connected");


module.exports = connection;