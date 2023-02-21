const { connect } = require('http2');
var mysql = require('mysql');
//const { connected } = require('process');
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'flight_database'
});

connection.connect(function(error){
    if(error) throw error;
    console.log('flight_database connected. ');
});

module.exports = connection;