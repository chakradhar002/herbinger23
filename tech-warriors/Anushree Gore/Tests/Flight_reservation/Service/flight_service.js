const connection = require('../Db/flight_mysqldb');
const router = require('../Controller/flight_controller');
var connectionsql = require('../Db/flight_mysqldb');
const {
    json
} = require('body-parser');

/**
 * @param {*} req 
 * @param {*} res 
 * @description: insertPerson functionality is used to insert record of person while signing up.
 */

const insertPerson = (req, res) => {
    let fullname = req.body.fullname;
    let email = req.body.email;
    let address = req.body.address;
    let gender = req.body.gender;
    let dob = req.body.dob;
    let password = req.body.password;

    let insertQuery = `insert into person (fullname, email, address, gender, dob, password) values('${fullname}','${email}','${address}','${gender}', '${dob}', '${password}')`;
    try {
        connectionsql.query(insertQuery, (err, data) => {
            console.log('Data inserted');
            console.log(data);
            res.send(JSON.stringify("Sign up Successful!"))
        })
    } catch (err) {
        throw ('Error', +err.message);
    }
}

/**
 * @param {*} req 
 * @param {*} res 
 * @description: getPersonList functionality is used to get all the details of all person who have signed up.
 */
const getPersonList = (req, res) => {
    try {
        connectionsql.query('SELECT * FROM PERSON', (err, result) => {
            console.log('Persons list');
            res.status(200).json(result);
        })
    } catch (err) {
        throw ('Error', +err.message);
    }
}

/**
 * @param {*} req 
 * @param {*} res 
 * @description: searchFlight functionality is used to search for flight details.
 */
const searchFlight = (req, res) => {
    let searchFlight = `select * from flight_details`;
    try {
        connectionsql.query(searchFlight, (err, result) => {
            console.log('Flight details');
            res.status(200).json(result);
        })
    } catch (err) {
        throw ('Error', +err.message);
    }
}

/**
 * @param {*} req 
 * @param {*} res 
 * @description: bookingFlight functionality is used to book flight by selecting seat and meal.
 */
const bookingFlight = (req, res) => {
    let id = req.body.id;
    let flight_id = req.body.flight_id;
    let seat_type = req.body.seat_type;
    let meal = req.body.meal;
    let passportno = req.body.passportno;

    let bookingFlight = `insert into booking (id,flight_id,seat_type,meal,passportno) values ('${id}', '${flight_id}', '${seat_type}', '${meal}', '${passportno}')`;

    try {
        connectionsql.query(bookingFlight, (err, data) => {
            console.log('Booking the flight');
            console.log(data);
            res.send(JSON.stringify('Booked a flight!'));
        })
    } catch (err) {
        throw ('Error', +err.message);
    }
}

/**
 * @param {*} req 
 * @param {*} res 
 * @description: getBookingList functionality is used to get the list of passengers.
 */
const getBookingList = (req, res) => {
    try {
        connectionsql.query('SELECT * FROM BOOKING', (err, result) => {
            if (err) throw err;
            console.log('Booking list');
            res.status(200).json(result);
        })
    } catch (err) {
        throw ('Error' + err.message);
    }
}

/**
 * @param {*} req 
 * @param {*} res 
 * @description: updateBooking functionality is used to update the flight booking.
 */
const updateBooking = (req, res) => {
    let seat_type = req.body.seat_type;
    let meal = req.body.meal;
    let booking_id = req.body.booking_id;

    let updateBookingQuery = `update booking set seat_type = '${seat_type}', meal = '${meal}' where booking_id = '${booking_id}'`;
    try {
        connectionsql.query(updateBookingQuery, (err, data) => {
            if (err) throw err;
            console.log('Updated Booking');
            console.log(data);
            res.status(200), json('Updated the flight booking!');
        })
    } catch (err) {
        throw ('Error', +err.message);
    }
}

/**
 * @param {*} req 
 * @param {*} res 
 * @description: cancelBooking functionality is used to cancel flight booking.
 */
const cancelBooking = (req, res) => {
    let booking_id = req.body.booking_id;

    let cancelBookingQuery = `delete from booking where booking_id = ${booking_id}`;
    try {
        connectionsql.query(cancelBookingQuery, (err, data) => {
            if (err) throw err;
            console.log('Booking Cancelled');
            res.status(200).json('Booking cancelled!');
        })
    } catch (err) {
        throw ('Error', +err.message);
    }
}

/**
 * @param {*} req 
 * @param {*} res 
 * @description: showReservation functionality is used to show reservation details of passenger.
 */
const showReservation = (req, res) => {
    let booking_id = req.body.booking_id;
    if (booking_id == null) {
        res.status(200).json('Booking id is not given.')
    } else {
        const showDeatilsQuery = `SELECT person.fullname,
        person.email,
        flight_details.source,
        flight_details.destination,
        booking.seat_type,
        booking.meal,
        booking.passportno
        FROM   person,
        flight_details,
        booking
        WHERE  person.id = booking.id
        AND    flight_details.flight_id = booking.f_id
        AND    booking.booking_id = '${booking_id}'`;
        try {
            connectionsql.query(showDeatilsQuery, (err, data) => {
                if (err) throw err;
                console.log('Reservation details');
                res.status(200).json(data);
            })
        } catch (err) {
            throw ('Error', +err.message);
        }
    }
}


module.exports = {
    insertPerson,
    getPersonList,
    searchFlight,
    bookingFlight,
    getBookingList,
    showReservation,
    updateBooking,
    cancelBooking
}