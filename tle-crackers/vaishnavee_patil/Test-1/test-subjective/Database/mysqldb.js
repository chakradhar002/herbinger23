var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'flightdatabase'
});
connection.connect(function(err){
    if(!!err){
        console.log(err);
    }else{
        console.log('connected succesfully !');
    }
});
module.exports=connection;