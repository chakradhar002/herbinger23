const router = require('../controller/flightReservation');
const conn = require('../database/mysql');
const { json } = require('body-parser');



/**
 * Validataton
 */
const validate = (req,res)=>{
    first_name = req.body.first_name;
    last_name = req.body.last_name;
    email = req.body.email;
    phone = req.body.phone;
    source_airport = req.body.source_airport;
    destination_airport = req.body.destination_airport;
    departure_date = req.body.departure_date;
    arival_date = req.body.arival_date;
    no_of_seat = req.body.no_of_seat;
    if(first_name == null||last_name == null||email==null||phone==null|| source_airport == null||destination_airport == null||departure_date==null||arival_date==null||no_of_seat==null)
    {
        throw new error("Something went wrong .. some/all feilds must be empty check again");
    }
}
/**
 * getAllPersons : display person table record   
 * @param {*req} receive request 
 * @param {*res} send response
 */
const getAllPersons = (req, res) => {

    conn.query('select * from person', (error, result) => {
        if (error) throw error;
        res.status(200).json(result);
    });
}


//makeReservation
/**
 * @Inserting values to reservation table
 * @param {*} req 
 * @param {*} res 
 */
const makeReservation = (req, res) => {
    try{
        first_name = req.body.first_name;
        last_name = req.body.last_name;
        email = req.body.email;
        phone = req.body.phone;
        source_airport = req.body.source_airport;
        destination_airport = req.body.destination_airport;
        departure_date = req.body.departure_date;
        arival_date = req.body.arival_date;
        no_of_seat = req.body.no_of_seat;
        validate();
        conn.query('insert into reservation(first_name,last_name,email,phone,source_airport,destination_airport,departure_date,arival_date,no_of_seat)values(?,?,?,?,?,?,?,?,?)', [first_name, last_name, email, phone, source_airport, destination_airport, departure_date, arival_date, no_of_seat], (error, result) => {

                
                res.status(200).json(result);
            
        });
    }catch(err){
        throw new error ("Something went wrong"+err);
        console.log(err)
    }
}

//modify reservation
/**
 * update reservation record
 * @param {*} req 
 * @param {*} res 
 */
const modifyReservation = (req, res) => {
    first_name = req.body.first_name,
        last_name = req.body.last_name,
        email = req.body.email,
        phone = req.body.phone,
        source_airport = req.body.source_airport,
        destination_airport = req.body.destination_airport,
        departure_date = req.body.departure_date,
        arival_date = req.body.arival_date,
        no_of_seat = req.body.no_of_seat,
        conn.query('update reservation set first_name = ?,last_name=?,email=?,source_airport=?,destination_airport=?,departure_date=?,arival_date=?,no_of_seat=? where phone=?', [first_name, last_name, email, source_airport, destination_airport, departure_date, arival_date, no_of_seat, phone], (error, result) => {

            if (error) throw error;
            else {
                res.status(200).json(result);
            }
        });
}

//cancel reservation
/**
 * Updating values to reservation table
 * @param {*} req 
 * @param {*} res 
 */
const cancelReservation = (req, res) => {

    phone = req.body.phone;
    try{
        conn.query('delete from reservation where phone = ?', [phone], (error, result) => {

            if (error) throw error;
            else {
                res.status(200).json(result);
            }
        });
    }catch(error){
        res.send("You must have entered wrong phone number "+error)
    }
}


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
   
    conn.query('insert into person(first_name,last_name,date_of_birth,gender,address,city,state,zipcode ,phone_number,email,password)values(?,?,?,?,?,?,?,?,?,?,?)',[first_name,last_name,date_of_birth,gender,address,city,state,zipcode ,phone_number,email,password],(error,result)=>{
   
       if(error)throw error;
       else{
            res.status(200).json(result);
       }		
    });
}


//search flight
/**
 * Search Flight
 */
const searchFlight = (req,res)=>{
    try{
        let airline = req.body.airline;
        conn.query('select * from transportation where airline = ?',[airline],(error,result)=>{
            if(error) throw error;
            else{
                res.status(200).json(result);
            }
        });
    }catch(erroor){
        console.log(error);
        res.send(error);
    }

}

//seat booking
/**
 * Seat booking
 * @param {*} req 
 * @param {*} res 
 */
const seatBooking = (req, res) => {
     visa_type = req.body.visa_type;
     meal_type = req.body.meal_type;
     ticket_type = req.body.ticket_type;
     passport_no = req.body.passport_no;
     email = req.body.email;
     flight_id = req.body.flight_id;
     p_id = req.body.p_id;
    try {
      con.connection.query('insert into booking(visa_type,meal_type,ticket_type,passport_no,email,flight_id,p_id)values(?,?,?,?,?,?,?)',[visa_type,meal_type,ticket_type,passport_no,email,flight_id,p_id], (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
      });
    } catch (error) {
      throw new Error(`error while signup of person id `+eror);
    }
  };

module.exports = {
    getAllPersons,
    makeReservation,
    modifyReservation,
    cancelReservation,
    signUp,
    searchFlight,
    seatBooking
}