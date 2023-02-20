var mysql = require('mysql2');

/**
 * @author: Anushree Gore.
 * @description: This is database connection file.
 */
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Test_1234',
    database: 'flight_reservation',
});

con.connect(function(error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Connected to database!');
    }
});

module.exports = con;