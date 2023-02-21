const { response } = require("express");
let con = require("../database/database");

/**
 * This will let us search for flights using source,destination  and date
 * @param {*} request 
 * @param {*} response 
 */
let searchFlight_details = async (request, response) => { //service name:
    try {
        let source = request.body.source;
        let destination = request.body.destination;
        let f_date = request.body.f_date;
        if ((source && destination && f_date) === null) {
            response.status(400).send("Field is missing");
        }
        else {
            var sql = `select * from flight_details where source = "${request.body.source}" and destination ="${request.body.destination}" and f_date="${request.body.f_date}"`;
            let [result] = await (await con).query(sql)
            if (result.length == 0) {
                throw new Error('No Flights Available')
            }
            response.send(result)
        }
    } catch (e) {
        response.status(400).send(e.message)
    }
};

/**
 * insertion in person table
 * @param {*} request 
 * @param {*} response 
 */
const signup = async (request, response) => { //service name:
    try {
        let first_name = request.body.first_name;
        let last_name = request.body.last_name;
        let gender = request.body.gender;
        let dateofbirth = request.body.dateofbirth;
        let email = request.body.email;
        let password = request.body.password;
        if (( first_name && last_name && gender && dateofbirth && email && password) === null) {
            response.status(400).send("All fields are mandatory");
        }
        else {
            var sql = `INSERT INTO person ( first_name, last_name, gender, dateofbirth, email, password) VALUES ("${first_name}",
            "${last_name}","${gender}","${dateofbirth}","${email}","${password}");`
            let [result] = await (await con).query(sql)
            response.send(result + "Data Sucessfully inserted")
        }

    } catch (e) {
        response.status(400).send(e.message)
    }
};
/**
 * insertion important details regarding flights
 * @param {*} request 
 * @param {*} response 
 */
const makeFlightReservation = async (request, response) => { //service name:
    try {
        let booking_id = request.body.booking_id;
        let visa_type = request.body.visa_type;
        let passport_no = request.body.passport_no;
        let meal = request.body.meal;
        let ticket_type = request.body.ticket_type;
        let seat = request.body.seat;
        let flight_no = request.body.flight_no;
        let person_id = request.body.person_id;
        if ((booking_id && visa_type && passport_no && meal && ticket_type && seat && flight_no && person_id) === null) {
            response.status(400).send("Input fields are missing");
        }
        else {
            var sql = `INSERT INTO passengerbooking  VALUES ("${booking_id}","${visa_type}","${passport_no}","${meal}","${ticket_type}","${seat}","${flight_no}","${person_id}");`;
            let [result] = await (await con).query(sql)
            response.send(result + "Data Sucessfully inserted")
        }
    } catch (e) {
        response.status(400).send(e.message)
    }
};

/**
 * if person wants to update his details
 * @param {*} request 
 * @param {*} response 
 */
const updatePersonInfo = async (request, response) => { //service name:
    try {
        let column = request.body.column;
        let sql;
        if (column === null) {
            response.status(400).send("Fields are Empty")
        }
        else {
            if (column === "email") {
                sql = `UPDATE person SET email ="${request.body.value}" WHERE person_id="${request.params.id}"`;
            }
            else if (column === "password") {
                sql = `UPDATE person SET password ="${request.body.value}" WHERE person_id="${request.params.id}"`;
            }
            let [result] = await (await con).query(sql)
            response.send(result + "Your new Record Updated");
        }


    } catch (e) {
        response.status(400).send(e.message)
    }
};

/**
 * here passenger can cancell his flight
 * @param {*} request 
 * @param {*} response 
 */
const flightcancellation = async (request, response) => { //service name:
    try {
        let p_id = request.params.id;
        let sql;
        if (p_id === null) {
            response.status(400).send("Person Id is empty")
        }
        else {
            sql = `UPDATE reservation set flight_status ="cancelled" where  p_id = "${p_id}"`
            let [result] = await (await con).query(sql)
            response.send(`${result}Your new Record Updated`);
        }


    }
    catch (e) {
        response.status(400).send(e.message)
    }
};

/**
 * here passenger can check his reservation
 * @param {*} request 
 * @param {*} response 
 */
let myReservation = async (request, response) => { //service name:
    try {
        let id = request.params.person_id;
        if (id === null) {
            response.status(400).send("Please enter person Id ");
        }
        else {
            var sql = `SELECT p1.first_name,p1.last_name,p1.gender,p2.Visa_type,p2.Passport_no,p2.Meal,
        p2.ticket_type,f1.source,f1.destination FROM person p1 
        JOIN passengerbooking p2 ON (p1.person_id = p2.person_id)
        JOIN flight_details f1 ON (f1.flight_no = p2.flight_no)
        and p1.person_id="${id}";`
            let [result] = await (await con).query(sql)
            if (result.length == 0) {
                throw new Error('Reservation not Found!!!')
            }
            response.send(result)
        }

    }
    catch (e) {
        response.status(400).send(e.message)
    }
};

module.exports = {
    searchFlight_details,
    signup,
    makeFlightReservation,
    updatePersonInfo,
    flightcancellation,
    myReservation,
};