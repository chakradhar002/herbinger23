// importing dependencies 
var mysql = require('mysql')

// setting up connection between database and nodejs
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "root",
    database: "test1"
});

// checking connection

connection.connect(function (error) {
    if (error) throw error;
    console.log('Connected!:)');

});

module.exports = connection;

