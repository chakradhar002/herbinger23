/**
 * @author Aditya Mahajan (tle)
 */
const express = require('express')

const router = require('../controller/airlineController');      // importing controller file
const connection = require('../database/databaseConnection');   // importing database file


/**
 * @description // To register new user/person with the system 
 * 
 * @param {string} first_name 
 * @param {string} last_name 
 * @param {string} gender 
 * @param {string} date_of_birth 
 * @param {string} email 
 * @param {number} phone_number 
 * @param {string} password 
 * @param {string} address 
 * @param {string} city 
 * @param {string} state 
 * @param {string} country 
 * @returns a resolved promise with status of insertion done or not
 */
let RegisterPerson = (first_name, last_name, gender, date_of_birth, email, phone_number, password, address, city, state, country) => {
    return new Promise((resolve, reject) => {

        connection.query('insert into person (first_name,last_name,gender,date_of_birth,email,phone_number,password,address,city,state,country) values (?,?,?,?,?,?,?,?,?,?,?)', [first_name, last_name, gender, date_of_birth, email, phone_number, password, address, city, state, country], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements)
        });
    });
}


/**
 * @description // to get all the user/person registered
 * 
 * @returns a promise with all elements in database
 */
let getPerson = () => {
    return new Promise((resolve, reject) => {
        connection.query('select * from person', (error, elements) => {
            if (error) {
                return reject(error)
            }
            return resolve(elements)
        });
    });
}


/**
 * @description // to add new flight details in flight table 
 * 
 * @param {string} airlines 
 * @param {string} aircraft 
 * @param {string} model_name 
 * @param {number} seating_capacity 
 * @param {string} source_location 
 * @param {string} destination_location 
 * @param {string} arrival_time 
 * @param {string} departure_time 
 * @returns a resolved promise with status of insertion done or not in flight database
 */
let addFLight = (airlines, aircraft, model_name, seating_capacity, source_location, destination_location, arrival_time, departure_time) => {
    return new Promise((resolve, reject) => {
        connection.query('insert into flight (airlines,aircraft,model_name,seating_capacity,source_location,destination_location,arrival_time,departure_time) values(?,?,?,?,?,?,?,?);', [airlines, aircraft, model_name, seating_capacity, source_location, destination_location, arrival_time, departure_time], (error, elements) => {
            if (error) {
                return reject(error)
            }
            return resolve(elements)
        })
    })
}

/**
 * @description // to search flight from source to destination
 * 
 * @param {string} source 
 * @param {string} destination 
 * @returns a resolved promise with the data 
 */
let searchFlight = (source, destination) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from flight where source_location = ? and destination_location = ?', [source, destination], (error, elements) => {
            if (error) {
                return reject(error)
            }
            return resolve(elements)
        });
    })
}

/**
 * @description // function to initiate the booking of person
 * 
 * @param {string} source_location 
 * @param {string} destination_location 
 * @param {string} visa_type 
 * @param {number} passport_no 
 * @param {string} booking_type 
 * @param {string} meal_type 
 * @param {string} seat_select 
 * @param {string} ticket_type 
 * @param {string} email 
 * @returns a resolved promise with status of insertion of data and display the data
 */
let makeBooking = (source_location, destination_location, visa_type, passport_no, booking_type, meal_type, seat_select, ticket_type, email) => {
    return new Promise((resolve, reject) => {
        connection.query('insert into booking (source_location,destination_location,visa_type,passport_no,booking_type,meal_type,seat_select,ticket_type,email) values(?,?,?,?,?,?,?,?,?)', [source_location, destination_location, visa_type, passport_no, booking_type, meal_type, seat_select, ticket_type, email], (error, elements) => {
            if (error) {
                return reject(error)
            }
            return resolve(elements)

        })
    })
}


/**
 * @description // fetch flight number for passing it to allotFlightNumber function for updating it into booking table
 * 
 * @param {string} source_location 
 * @param {string} destination_location 
 * @returns promise with retrived flight_number from database
 */
let getFlightnumber = (source_location, destination_location) => {
    return new Promise((resolve, reject) => {
        connection.query('select f.flight_number from flight f where source_location =? and destination_location =?', [source_location, destination_location], (error, elements) => {
            if (error) {
                return reject(error)
            }
            var pid = elements[0].flight_number;
            getFlightId(pid)
            return resolve(elements)
        })
    })
}
// global variable to retrive locally stored flight id for passing it to allotFlightNumber
let flight_id;
// function to get the flight id and store it to flight_id global variable
function getFlightId(fid) {
    flight_id = fid;
    return fid;
}


/**
 * @description // function to allot the particular flight to passenger
 * 
 * @param {string} source_location 
 * @param {string} destination_location 
 * @returns a promise with status of updation in database
 */
let allotFlightNumber = (source_location, destination_location) => {
    return new Promise((resolve, reject) => {
        connection.query('update booking set flight_number = ? where source_location =? and destination_location = ?', [flight_id, source_location, destination_location], (error, elements) => {
            if (error) {
                return reject(error)
            }
            return resolve(elements)
        })
    })
}

// show all bookings
/**
 * @description all booking entries from database
 * @returns data
 */
let getAllBookings = () => {
    return new Promise((resolve, reject) => {
        connection.query('select * from booking', (error, elements) => {
            if (error) {
                return reject(error)
            }
            return resolve(elements)
        })
    })
}

// show reservation status for a specfic user
/**
 * @description specfic reservation entry from all three tables of database
 * @param {string} email 
 * @returns data
 */
let showReservationById = (email) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT p.email, p.first_name, p.last_name, p.address, b.source_location, b.destination_location, b.meal_type, b.seat_select, b.ticket_type,b.booking_date, f.flight_number, f.airlines, f.aircraft, f.model_name,b.booking_status FROM person p INNER JOIN booking1 AS b ON b.email = p.email inner JOIN flight f ON b.flight_number = f.flight_number and  p.email = ? ', [email], (error, elements) => {
            if (error) {
                return reject(error)
            }
            return resolve(elements)
        })
    })
}
/**
 * @description this function cascade delete the record 
 * @returns delete record status
 */
let deletePerson = (email) => {
    return new Promise((resolve, reject) => {
        connection.query('delete from person where email =?', [email], (error, elements) => {
            if (error) {
                return reject(error)
            }
            return resolve(elements)
        })
    })
}

/**
 * @description // this function will cancel booking 
 * @param {string} email 
 * @returns promise with result
 */
let cancelBooking = (email) => {
    return new Promise((resolve, reject) => {
        connection.query(`update booking set booking_status = 'cancelled' where email = ?`, [email], (error, elements) => {
            if (error) {
                return reject(error)
            }
            return resolve(elements)
        })
    })
}


/**
 * @description // update information of person in person table
 * @param {string} email 
 * @param {number} phone_number 
 * @returns return a promise with updated data
 */
let updatePersonInfo =( email, phone_number) =>{
    return new Promise((resolve,reject) => {
        connection.query(`update person set password = ? where email = ?`,[email,phone_number],(error,elements) =>{
            if(error){
                return reject(error)
            }
            return resolve(elements)
        })
    })
}
module.exports = ({
    RegisterPerson, // register new person
    getPerson,      // get all data from person tables
    searchFlight,      // search flight
    addFLight,          // add new flight details into database
    makeBooking,        // to book a ticket
    allotFlightNumber,  // to update flight number to person after booking
    getFlightnumber,        // to retrive flight number from database
    getAllBookings,     // to retrive all data from booking table
    showReservationById, // to see the specfic person's reservation details
    deletePerson,        // to cascade delete the record from database
    cancelBooking,       // for cancelling the booking
    updatePersonInfo    // for updating password of person /  registered user 
});
