/**
 * @author
 */
const { query } = require("express");
const router = require("../Controller/flightcontroller");
var connection = require("../Database/mysqldb");
/**
 * this function will insert data in person table
 * @param {*} req Request object
 * @param {*} res Response object
 */
const insertdata = (req, res) => {
  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const gender = req.body.gender;
  const dob = req.body.dob;
  const password = req.body.password;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  connection.query(
    "INSERT INTO person(email,firstname,lastname,gender,dob,passward,city,state,country) VALUES(?,?,?,?,?,?,?,?,?)",
    [email, firstname, lastname, gender, dob, password, city, state, country],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        //res.send("task completed");
        res.status(200).json(result);
      }
    }
  );
};
/**
 * this function will display flight details
 * @param {*} req
 * @param {*} res
 */
const getflightdetails = (req, res) => {
  const flightsource = req.body.flightsource;
  const destination = req.body.destination;
  connection.query(
    "SELECT *FROM flightdeatils WHERE flightsource=? and destination=?",
    [flightsource, destination],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json(result);
        // res.send("task completed");
      }
    }
  );
};
/**
 * this function will do booking for particular flight
 * @param {*} req
 * @param {*} res
 */
const makereservation = (req, res) => {
  const person_id = req.body.person_id;
  const visatype = req.body.visatype;
  const passport_no = req.body.passport_no;
  const tickettype = req.body.tickettype;
  const mealtype = req.body.mealtype;
  const select_seat = req.body.select_seat;
  const flight_number = req.body.flight_number;
  const traveldate = req.body.traveldate;
  connection.query(
    "INSERT INTO passenger(person_id,visatype,passport_no,tickettype,mealtype,select_seat,flight_number,traveldate) VALUES(?,?,?,?,?,?,?,?)",
    [
      person_id,
      visatype,
      passport_no,
      tickettype,
      mealtype,
      select_seat,
      flight_number,
      traveldate,
    ],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        //res.send("you are done with your reservation");
        const bid = result[0].booking_id;
        const pid = result[1].person_id;
        console.log(bid + " ---" + pid);
        reservetable(req, res, bid, id);
      }
    }
  );
};
/**
 * this function will display booking details for customer
 */
const seereservation = async (req, res) => {
  try {
    const person_id = req.body.person_id;
    var sql = `select p.person_id, f.flight_number,b.booking_id,b.mealtype,b.select_seat 
                    from person p, passenger b, flightdeatils f where p.person_id ="${person_id}" 
                    and b.person_id= p.person_id and b.flight_number=f.flight_number`;
    const query = await connection.query(sql, function (error, result) {
      res.status(200).json(result);
    });
  } catch (e) {
    // res.status(400).send(e)
    console.error(e);
  }
};
/**
 * this function will take booking details in reservation table in backend and gerate reservation id
 * @param {*} req
 * @param {*} res
 * @param {*} booking_id id for booking table
 * @param {*} person_id id for person table
 */
const reservetable = async (req, res, booking_id, person_id) => {
  try {
    const currentdate = new Date().toISOString().slice(0, 19).replace("T", "");
    const insertsql = `insert into reservation(booking_id,person_id,reservation_date)  select '${booking_id}','${person_id}','${currentdate}' from passenger where person_id='${person_id}'`;
    const query = await connection.query(insertsql, function (error, result) {
      res.status(200).json(result);
    });
  } catch (e) {
    console.error(e);
  }
};
/**
 * this function will update the record in paasenger table
 * @param {*} req
 * @param {*} res
 */
const updatebooking = async (req, res) => {
  try {
    const person_id = req.body.person_id;
    const traveldate = req.body.traveldate;
    const mealtype = req.body.mealtype;
    const select_seat = req.body.select_seat;
    const sql =
      "update passenger set traveldate=?,mealtype=?,select_seat=? where person_id=?";
    connection.query(
      sql,
      [traveldate, mealtype, select_seat, person_id],
      (err, result) => {
        if (err) {
          throw err;
        } else {
          //res.status(200).json(result);
          res.send("task completed");
        }
      }
    );
  } catch (e) {
    console.error(e);
  }
};
/**
 * this function will cancel the booking and post cancelled status in passenger table
 * @param {*} req
 * @param {*} res
 */
const cancelbooking = async (req, res) => {
  const booking_id = req.body.booking_id;
  try {
    connection.query("update passenger set status=? where booking_id=?", [
      "cancelled",
      booking_id,
    ]);
    res.send("reservation cancelled successfully");
  } catch (e) {
    console.error(e);
  }
};
module.exports = {
  insertdata,
  getflightdetails,
  makereservation,
  seereservation,
  reservetable,
  updatebooking,
  cancelbooking,
};
