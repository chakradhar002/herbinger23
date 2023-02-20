/**
 * @author  : Mahadev Bansode
 * @Team Pentagon
 */
let connect = require("../Database/mysqldb");

/**
 * @description create customer function adds the new new customer into the database system.
 * @param {*} req 
 * @param {*} res 
 */
let createCustomer = (req, res) => {
  //customer table data
  let email = req.body.email;
  let fname = req.body.firstname;
  let lname = req.body.lastname;
  let gender = req.body.gender;
  let password = req.body.password;

  /**
   * @description used to check weather customer is already exists into the database system.
   */
  try {

    let sql = `select * from customer where email='${email}'`;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        res.send(JSON.stringify("You are already an existing Customer..!"));
      }
    });

    /**
     * @description insert customer record into the customer table if it not present into the database.
     */
    sql = `insert into customer(email,firstname,lastname,gender,password) values('${email}','${fname}','${lname}','${gender}','${password}')`;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      res.send(JSON.stringify("Successfully Regestered..!"));
    });

  } catch (error) {
    res.send(error);
  }
}
/**
 * @description display all the availble flights for given source - destination on given date.
 * @param {*} req 
 * @param {*} res 
 */
const getFlightsList = (req, res) => {
  // source given by user/customer
  let source = req.body.source.toLowerCase();
  //destination given by user/customer.
  let destination = req.body.destination.toLowerCase();
  //date given by user/customer.
  let date = req.body.date;

  try {

    let sql = `select * from flight_details where sourceairport = '${source}' and destinationairport = '${destination}' and Date(departuredate) = '${date}'`;

    connect.query(sql, function (err, result) {
      if (err) throw err;

      result.length ? res.status(200).json(result) : res.status(200).json(`No Flights Availble for '${source} to '${destination}' on '${date}`);
      //console.log(result);
    });

  } catch (error) {
    res.send(error);
  }
};

/**
 * @description make reservation for customer with the given flight id.
 * @param {*} req 
 * @param {*} res 
 */
const createReservation = (req, res) => {

  let email = req.body.email;
  //passenger table data
  let visa = req.body.visatype;
  let passport = req.body.passportno;
  //reservation table data
  let fno = req.body.fno;
  let seat = req.body.seat_no;
  let ticket = req.body.tickettype;
  let meal = req.body.meal;

  try {
    sql = `insert into passenger(email,visatype,passportno,tickettype) values('${email}','${visa}','${passport}','${ticket}')`;

    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("passenger = " + result);
    });

    sql = `insert into reservation(fno,email,seat_no,tickettype,meal) values('${fno}','${email}','${seat}','${ticket}','${meal}')`;

    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Ticket Booked successfully !", result.pid);
      searchForResult(req, res);
    });

  } catch (error) {
    res.send(error);
  }

};
/**
 * @description change the reservation made by passenger with the new reservation Details.
 * @param {*} req 
 * @param {*} res 
 */
const modifyReservation = (req, res) => {
  //passenger id which is passed through end point to show reservation details.
  let rid = req.params.rid;
  //flight id which is passed through json body to change the reservation.
  let fno = req.body.fno;
  //seats no which is selected by passenger through json body to.
  let seat_no = req.body.seat_no;
  //ticket type which is passed through json body to change the reservation.
  let tickettype = req.body.tickettype;
  let meal = req.body.meal;
  try {
    connect.query(
      `update reservation set fno='${fno}',seat_no='${seat_no}',tickettype='${tickettype}',meal='${meal}' where rid='${rid}'`,
      (err, result) => {
        if (err) throw err;
        getReservationDetails(req, res);
      }
    );
  } catch (error) {
    res.send(error);
  }
};

/**
 * @description this method cancels the booked ticket by passenger.
 * @param {*} req 
 * @param {*} res 
 */
const cancelReservation = (req, res) => {
  //passenger id which is passed through end point to show reservation details.
  let rid = req.params.rid;
  //flight id which is passed through json body to cancel the reservation.

  let sql = `update reservation set status='C' where rid='${rid}' and status='B'`;

  try {
    connect.query(sql, (err, result) => {
      if (err) throw err;
      if (result.affectedRows > 0)
        res.send(JSON.stringify("Your Flight ticket is Cancelled : id = " + rid));
      else res.send(JSON.stringify("Recored not Found Having id = " + rid));
    });
  } catch (error) {
    res.send(error);
  }

};

/**
 * @description it shows the users flight reservation details.
 * @param {*} req 
 * @param {*} res 
 */
const getReservationDetails = (req, res) => {
  //passenger id which is passed through end point to show reservation details.
  let rid = req.params.rid;

  try {
    connect.query(`select * from reservation where rid='${rid}'`, (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
  } catch (error) {
    res.send(error);
  }

};
/**
 * @description display all the lists of availble food options in flight.
 * @param {*} req 
 * @param {*} res 
 */
const getMealMenu = (req, res) => {

  try {
    connect.query(`select * from meal`, (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
  } catch (error) {
    res.send(error);
  }

};
/**
 * @description used to return inserted data into the reservation table for Acknowledgement
 * @param {*} email
 * @param {*} req 
 * @param {*} res 
 */
let searchForResult = (req, res) => {
  let email = req.body.email;
  let fno = req.body.fno;
  try {
    connect.query(
      `select * from reservation where email='${email}' and fno='${fno}'`,

      (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
      }
    );
  } catch (error) {
    res.send(error);
  }

};


module.exports = {
  getFlightsList,
  createReservation,
  modifyReservation,
  cancelReservation,
  getReservationDetails,
  getMealMenu,
  createCustomer
};


