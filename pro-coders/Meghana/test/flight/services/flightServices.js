const router = require('../controller/flightController')
var connection = require('../database/sqldb');


/**
 * @description:display the flight details
 * @param {*} req 
 * @param {*} res 
 */
const displayFlightDetails = async (req, res) => {
    await connection.query('select * from flight_details', (err, result) => {
        if (err) throw err
        res.status(200).json(result);
    })
};

/**
 * @description:sign up function of person
 * @param {*} req 
 * @param {*} res 
 */
const signup = async (req, responce) => {
    const first_name = req.body.first_name;
    const person_id = req.body.person_id;
    const last_name = req.body.last_name;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const email = req.body.email;
    const password = req.body.password;
    try {
        var sql = `INSERT INTO person(first_name,last_name,gender,dob,email,password) VALUES ("${first_name}","${last_name}","${gender}","${dob}","${email}","${password}")`;
        let [result] = await (await connection).query(sql)
        if (first_name && last_name && gender && dob && email && password == null) {
            throw new Error('Please enter all the fields')
        }
        responce.send(result + 'Sign up Successfully!!')
    } catch (e) {
        responce.status(200).send(e.message)
    }
};

/**
 * @description:searching the details of flight from source to destination
 * @param {*} req 
 * @param {*} responce 
 */
let searchflightdetails = async (req, responce) => {
    const source = req.body.source;
    const Destination = req.body.Destination;
    try {
        var sql = `select * from flight_details where source='${source}' and Destination='${Destination}'`;
        let [result] = await (await connection).query(sql)
        if (result.lenght == 0) {
            throw new Error('Flight is not available')
        }
        responce.send(result)
    } catch (e) {
        responce.status(200).send(e.message)
    }
}

/**
 * @description:book the flight
 * @param {*} req 
 * @param {*} responce 
 */
let bookflight = async (req, responce) => {
    const booking_id = req.body.booking_id;
    const visa_type = req.body.visa_type;
    const passport_no = req.body.passport_no;
    const meal_type = req.body.meal_type;
    const ticket_type = req.body.ticket_type;
    const seat_type = req.body.seat_type;
    const person_id = req.body.person_id;
    const flight_no = req.body.flight_no;
    try {
        var sql = `insert into passenger_booking(visa_type,passport_no,meal_type,ticket_type,seat_type,person_id,flight_no) values('${visa_type}','${passport_no}','${meal_type}','${ticket_type}','${seat_type}','${person_id}','${flight_no}')`;
        let [result] = await (await connection).query(sql)
        if (meal_type == null) {
            throw new Error('Please enter meal menu')
        }
        responce.send(result)
    } catch (e) {
        responce.status(200).send(e.message)
    }
}


/**
 * @description:canceling the reservation
 * @param {*} req 
 * @param {*} responce 
 */
let cancelReservation = async (req, responce) => {
    const p_id = req.body.p_id;
    const flight_status = req.body.flight_status;
    try {
        var sql = `update reservation set flight_status='cancel' where p_id='${p_id}'`;
        let [result] = await (await connection).query(sql)
        responce.send(result)
        responce.send('Flight is canceled');
    } catch (e) {
        responce.status(200).send(e.message)
    }
}

/** 
 * @description:getting the details of flight
 * @param {*} req 
 * @param {*} responce 
 */
let getBookingDetails = async (req, responce) => {
    const person_id = req.body.person_id;
    try {
        var sql = `select person.first_name,person.last_name,person.gender,passenger_booking.booking_id,passenger_booking.visa_type,passenger_booking.passport_no,passenger_booking.ticket_type,flight_details.source,flight_details.destination from person join passenger_booking on person.person_id=passenger_booking.person_id join flight_details on (flight_details.flight_no=passenger_booking.flight_no) and person.person_id='${person_id}'`;
        let [result] = await (await connection).query(sql)
        responce.send(result)
        responce.send('booking details are:');
    } catch (e) {
        responce.status(200).send(e.message)
    }
}


module.exports = {
    signup,
    displayFlightDetails,
    searchflightdetails,
    bookflight,
    cancelReservation,
    getBookingDetails
}