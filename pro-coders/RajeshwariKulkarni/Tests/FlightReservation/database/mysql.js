var mysql = require('mysql');
/**
 * @author: Rajeshwari Kulkarni
 */
/**
 * creating connection with databse
 */
var conn = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'flightreservationtest'
});

/**
 * connecting to database
 */
conn.connect(function(error,result){
    if(error){
        console.log(error);
    }else{
        console.log("Connected sucessfully!!");
    }
})


module.exports = conn;