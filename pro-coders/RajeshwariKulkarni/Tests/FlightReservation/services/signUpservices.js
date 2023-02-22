const conn = require('../database/mysql');
const router = require('../controller/signupController');
const {json} = require('body-parser');

//Customers able to sign-up to the application
/**
 * @Inserting values to reservation table
 * @param {*} req 
 * @param {*} res 
 */
const signUp= (req,res)=>{
    first_name = req.body.first_name;
    last_name = req.body.last_name;
    date_of_birth = req.body.date_of_birth;
    gender = req.body.gender;
    address = req.body.address;
    city = req.body.city;
    state = req.body.state;
    zipcode = req.body.zipcode;
    phone_number = req.body.phone;
    email =  req.body.email;
    password = req.body.password;
   
    conn.query('insert into person(first_name,last_name,date_of_birth,gender,address,city,state,zipcode ,phone_number,email,password)values(?,?,?,?,?,?,?,?,?)',[first_name,last_name,date_of_birth,gender,address,city,state,zipcode ,phone_number,email,password],(error,result)=>{
   
       if(error)throw error;
       else{
            res.status(200).json(result);
       }		
    });
}

module.exports = {signUp }