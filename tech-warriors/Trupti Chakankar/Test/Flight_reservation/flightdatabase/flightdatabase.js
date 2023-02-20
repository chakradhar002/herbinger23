var mysql = require('mysql2');
/**
 * @description:Database information
 */


let con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Test_1234',
    database : 'flight_reservation'
});

con.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected!");
    }
});
module.exports = {con};