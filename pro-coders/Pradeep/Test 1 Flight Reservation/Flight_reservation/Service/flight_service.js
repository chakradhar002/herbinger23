
/**
 *  @author : Pradeep Prajapati
 *  @description : service module file for flight booking test @Harbinger trainee program.
 */

const connection = require('../database/flight_database');
var router = require('../controller/flight_controller');
const { response } = require('express');

/**
 * @description : API to get list of all avilable flights.
 * @method : get.
 * @param {*} req 
 * @param {*} res 
 */
const getFlightList = (req, res) => {
    let qry = 'select * from flights ';
    connection.query( qry , (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
    });
};


/**
 * @description : Api to get all passanger list
 * @method      : get
 * @param {*} req 
 * @param {*} res 
 */
const getPassangerList = (req, res) => {
    let qry = 'select * from passanger';
    connection.query( qry , (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
    });
};


/**
 * @description : API to get all booking record.
 * @method      : get.
 * @param {*} req 
 * @param {*} res 
 */
const showAllBooking = (req, res) => {
    let qry = 'select booking_table.booking_id, passanger.p_name, flights.source, flights.destination, flights.Flight_time, booking_table.flight_date, meal.meal_name from passanger inner join booking_table on passanger.p_id = booking_table.passanger_id inner join flights on flights.flight_id = booking_table.flight_id inner join meal on meal.meal_id = booking_table.meal_id ';
    connection.query( qry , (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
    });
};


/**
 * @description : API to get particular booking by its ID
 * @method      : POST
 * @param {*} req 
 * @param {*} res 
 */
const getBookingById = (req, res) => {
    let booking_id = req.body.booking_id;
    const qry = 'select booking_table.booking_id, passanger.p_name, flights.source, flights.destination, flights.Flight_time, booking_table.flight_date, meal.meal_name, booking_table.status from passanger inner join booking_table on passanger.p_id = booking_table.passanger_id inner join flights on flights.flight_id = booking_table.flight_id inner join meal on meal.meal_id = booking_table.meal_id where booking_id = ? '
    connection.query(qry, booking_id, (err, result) => {
        try{
            if(result == '') throw new console.error('Empty response!!');
            else{
                console.log('Booking data fetched');
                res.status(200).json(result);
            }
        }
        catch{
            res.status(200).json('No record found!! please check booking id and try again. ');
        }
    })
}


/**
 * @description : API to add a new passanger to database.
 * @method      : POST
 * @param {*} req 
 * @param {*} res 
 */
let addPassanger = (req, res) => {
    var addPassangerArray = [];
    addPassangerArray[0] = req.body.p_name;
    addPassangerArray[1] = req.body.email;
    addPassangerArray[2] = req.body.address_id;
    const qry = 'insert into passanger (p_name, email, address_id) values (?, ? , ?) '; 
    connection.query (qry, addPassangerArray, (err, result) => {
        if(err) throw err;
        console.log("passanger data inserted !!");
        res.status(200).json(result); 
    }) 
}


/**
 * @description : Api to create a new flight booking.
 * @method      : POST
 * @param {*} req 
 * @param {*} res 
 */
let createBooking = (req, res) => {
    var createBookingArray = []; 
    createBookingArray[0] = req.body.passanger_id;
    createBookingArray[1] = req.body.flight_id;
    createBookingArray[2] = req.body.meal_id;
    createBookingArray[3] = req.body.flight_date;
    createBookingArray[4] = req.body.seat_no;
    createBookingArray[5] = req.body.status; 

    const qry = 'insert into booking_table (passanger_id, flight_id, meal_id, flight_date, seat_no, status) values (?, ?, ?, ?, ?, ?) ';
    if (createBookingArray.includes(null) == true) {
        console.log("failed!! it contains null values ");
        res.status(300).json("failed to create booking some fields are missing. ");
    }
    else {
        connection.query (qry, createBookingArray, (err, result) => {
            if(err) throw err;
            console.log(" Booked !!");
            res.status(200).json(result); 
        }) 
    }

} 


/**
 * @description : API to fetch record of a particular passanger by its ID
 * @method      : POST
 * @param {*} req 
 * @param {*} res 
 */
let getPassangerByEmail = async (req, res) => {
    const qry = 'select p_id from passanger where email = ? '
    var passangerEmail = req.body.email; 
    await connection.query( qry, passangerEmail, (err, result) => {
        if(err) throw err;                                          //res.status(200).json(result);
        try{
            var pid = result[0].p_id;
            getValue(pid, req, res)
        }
        catch(e){
            console.log('no output reciever from database!!');
            res.status(300).json('Something is wrong!! Maybe value doesnot exist please try again !!');
        }
    });
}
let getValue = (val, req, res) => {
    const qry = 'select passanger.p_id, passanger.p_name, passanger.email, address_table.city, address_table.ZIP, address_table.state from passanger inner join address_table on passanger.p_id = address_table.p_id where passanger.p_id = ? '
    connection.query( qry, val, (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
        console.log('Data Fetched successfully '); 
    });
}


/**
 * @description : Master search API to get records of flights, passangers, meals.
 * @method      : 
 * @param {*} req 
 * @param {*} res 
 */
let masterSearchAPI = async (req, res) => {
    let key = req.body.key; 
    let value_1 = req.body.value_1; 
    let value_2 = req.body.value_2;
    switch (key) {

        // To get passanger detail by email
        case 'getPassangerByEmail' : 
        {
            const qry = 'select passanger.p_id, passanger.p_name, passanger.email, address_table.city, address_table.ZIP, address_table.state from passanger inner join address_table on passanger.p_id = address_table.p_id where passanger.email = ? '
            await connection.query(qry, value_1, (err, result) => {
                try{                                             //               console.log("inside try " + value_1);
                    if(result == '') throw new console.error('Empty output!! Maybe value does not exist in DataBase. ');
                    res.status(200).json(result);
                    console.log('Passanger Data Fetched successfully ' + result);
                }
                catch{
                    console.log('no output recieverd from database!!');
                    res.status(300).json('Something is wrong!! Maybe value doesnot exist please try again !!');
                }
            });
            break;
        }

        // To get show flights on two specific cities.
        case 'getFlightBySourceDestination' : 
        {
            const qry = 'select * from flights where source = ? && destination = ? '
            await connection.query(qry, [value_1, value_2], (err, result) => {
            //    if(err) throw err;
                try{
                    if(result == '')  throw new console.error('Empty output!! Maybe value does not exist in DataBase. ');
                    else{
                    console.log('Flight data fetched successfully!! ')
                    res.status(200).json(result);
                    }
                }
                catch{
                    console.log('no output recieverd from database!!');
                    res.status(300).json('Something is wrong!! Maybe value doesnot exist please try again !!');
                }
            });
            break;
        }

        // To show list of all available meals on flight.
        case 'getAllMeal' : 
        {
            const qry = 'select * from meal'
            connection.query(qry, (err, result) => {
                if(err) throw err;
                res.status(200).json(result);
            })
            break;
        }
        
        // Default case to execute and display eerror if no key is match.
        default:
            {
                console.log('Default Executed : key doesnot match!! no opretionas performed. ');
                res.status(300).json('Something is wrong!! Maybe key value doesnot match/exist please check & try again !!');
                break;
            }
    }
}


/**
 * @description : To update various fields of a booking record
 * @method      : POST
 * @param {*} req 
 * @param {*} res 
 */
let updateBooking = async (req, res) => {
    let booking_id = req.body.booking_id;
    let key = req.body.key;
    let value = req.body.value;
    console.log('here ' + key);
    switch (key) 
    {

        // To cahnge the flight of a booking.
        case 'flight' : 
        {   
            const qry = 'update booking_table set flight_id = ? where booking_id = ?'
            await connection.query(qry, [value, booking_id], (err, result) => {
                try{
                    if(result == '') throw new console.error("Empty response!! ");
                    else{
                        console.log('Booking Updated!!   -  flight ');
                        res.status(200).json(result);
                    }
                }
                catch{
                    console.log('flight : something went wrong!! please check values. ')
                    res.status(200).json('flight : Something Went Wrong. please check input values. ')
                }

            })
            break;
        }

        // To change meal on flight.
        case 'meal' : 
        {
            console.log('case : meal ')
            const qry = 'update booking_table set meal_id = ? where booking_id = ?' 
            await connection.query(qry, [value, booking_id], (err, result) => {
                try{
                    if(result == '') throw new console.console.error("Empty response!! ");
                    else{
                        console.log('Booking Updated!!   -  meal ');
                        res.status(200).json(result);
                    }
                }
                catch{
                    console.log(' meal : something went wrong!! please check values. ')
                    res.status(200).json('meal : Something Went Wrong. please check input values. ')
                }
            })
            break;
        }

        // To change flight Date
        case 'date' : 
        {
            console.log('case : date ')
            const qry = 'update booking_table set flight_date = ? where booking_id = ?'
            connection.query(qry, [value, booking_id], (err, result) => {
                try{
                    if(result == null) throw new console.error('Empty response!! something went wrong. ');
                    else {
                        console.log('Booking Updated!!   -   Flight Date');
                        res.status(200).json('flight date updated to : ' + value);
                    }
                }
                catch (err) {
                    console.log(' date : something went wrong!! please check values. ');
                    res.status(200).json('date : Something Went Wrong. please check input values. ');
                }
            })
            break;
        }

        // To cancel a booking
        case 'cancel' : 
        {
            console.log('inside cancel.');
            const qry  = 'update booking_table set status = false where booking_id = ? '
            connection.query(qry, booking_id, (err, result) => {
                if(err) throw err;
                console.log('booking Canceled');
                res.status(200).json('Booking for Id : ' + booking_id + ' canceled !!');
            })
            break;
        }
        
        // default case to show error msg if no key is matched.
        default : {
            console.log('Default');
            res.status(300).json('Default : Something is wrong!! Maybe key value doesnot match/exist please check & try again !!');

            break;
        }
    }
}


module.exports = {
    getFlightList,
    getPassangerList,
    showAllBooking, 
    getBookingById,
    addPassanger,
    createBooking,
    getPassangerByEmail,
    masterSearchAPI,
    updateBooking
};


//function getTheRecord(
/*
{
    "booking_id": 703,
    "passanger_id": 201,
    "flight_id": 302,
    "meal_id": 404,
    "flight_date": "2023-02-10T18:30:00.000Z",
    "seat_no": 3,
    "status": 1
}
*/