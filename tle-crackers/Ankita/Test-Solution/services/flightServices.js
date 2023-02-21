/**
 * @author Ankita Bhujbal
 */

const router = require("../controller/flightController");
var con = require("../db/dbconn");
const { json } = require("body-parser");
const { body } = require("express-validator");

/**
 * @description //registration
 * @param {*} req
 * @param {*} res
 *
 */
const signUpPerson = (req, res) => {
  // let p_id=req.body.p_id;
  let lastName = req.body.lastName;
  let firstName = req.body.firstName;
  let email = req.body.email;
  let password = req.body.password;
  let gender = req.body.gender;
  let dob = req.body.dob;
  let city = req.body.city;

  let query = `insert into person (lastName,firstName,email,password,gender,dob,city) values('${lastName}','${firstName}','${email}','${password}','${gender}','${dob}','${city}')`;
  console.log(query);
  try {
    con.connection.query(query, (err, result) => {
      if (err) throw err;
      res.send(JSON.stringify("registered succcessfully"));
    });
  } catch (e) {
    throw new Error(`user is registered already`);
  }
};

/**
 * @description //search flight
 * @param {*} req
 * @param {*} res
 *
 */

const searchFlight = (req, res) => {
  let airline = req.body.airline;
  let query = `select * from flight_details where airline='${airline}'`;
  try {
    con.connection.query(query, (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
  } catch (e) {
    throw new Error(res.send(JSON.stringify("no such  airline is present")));
  }
};

/**
 * @description //book the seat
 * @param {*} req
 * @param {*} res
 *
 */

const seatBooking = (req, res) => {
  // let booking_id=req.body.booking_id;
  let visa_type = req.body.visa_type;
  let meal_type = req.body.meal_type;
  let ticket_type = req.body.ticket_type;
  let passport_no = req.body.passport_no;
  let email = req.body.email;
  let flight_id = req.body.flight_id;
  let p_id = req.body.p_id;
  let query = `insert into booking(visa_type,meal_type,ticket_type,passport_no,email,flight_id,p_id) values ('${visa_type}','${meal_type}','${ticket_type}',${passport_no},'${email}',${flight_id},${p_id})`;
  try {
    con.connection.query(query, (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
  } catch (e) {
    throw new Error(`error while signup of person id ${e}`);
  }
};

/**
 * @description //update the booked seat
 * @param {*} req
 * @param {*} res
 *
 */

const updatebookingById = (req, res) => {
  let ticket_type = req.body.ticket_type;
  // let flight_id=req.body.flight_id;
  let booking_id = req.body.booking_id;
  console.log(booking_id);
  let query = `update booking set ticket_type ='${ticket_type}' where booking_id = '${booking_id}'`;
  try {
    con.connection.query(query, (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
  } catch (e) {
    throw new Error(res.send(JSON.stringify("booking id isn't exist")));
  }
};

/**
 * @description //all registerd users
 * @param {*} req
 * @param {*} res
 *
 */

const gerallUsers = (req, res) => {
  try {
    con.connection.query("select * from person", (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
  } catch (e) {
    throw new Error("error while getting user data");
  }
};

/**
 * @description //cancel the booking
 * @param {*} req
 * @param {*} res
 *
 */

const cancelBooking = (req, res) => {
  let booking_id = req.body.booking_id;
  let status = req.body.status;
  let query = `update booking set status='${status}' where booking_id='${booking_id}'`;
  try {
    con.connection.query(query, (err, result) => {
      if (booking_id) res.send(JSON.stringify("status updated successfully"));
    });
  } catch (e) {
    throw new Error(res.send(JSON.stringify("there is no such booking")));
  }
};

module.exports = {
  signUpPerson,
  searchFlight,
  seatBooking,
  updatebookingById,
  gerallUsers,
  cancelBooking,
};
