/**
 * @author Amol Rathod
 */

const { json } = require("body-parser");
const flightReservationMySQLDatabaseFile =
  require("../database/flightReservationMySQLDatabase").flightReservationMySqlConnection;

// signup :
/**
 * @description signup for new customer
 * @param {*} req
 * @param {*} res
 * @returns
 */
const signupForNewCustomer = async (req, res) => {
  const { email, firstName, lastName, gender, dob, password, aid } = req.body;

  const signupForCustomerQuery = `insert into customer (email, firstName, lastName, gender, dob, password, aid) values ('${email}', '${firstName}', '${lastName}', '${gender}', '${dob}', '${password}', ${aid});`;

  if (email == "")
    return res.status(400).json(`Error : email can not be empty`);

  if (firstName == "")
    return res.status(400).json(`Error : First Name can not be empty`);

  if (lastName == "")
    return res.status(400).json(`Error : Last Name can not be empty`);

  if (gender == "")
    return res.status(400).json(`Error : Gender can not be empty`);

  if (dob == "")
    return res.status(400).json(`Error : Date of Birth can not be empty`);

  if (password == "")
    return res.status(400).json(`Error : Password can not be empty`);

  try {
    const [result] = await (
      await flightReservationMySQLDatabaseFile()
    ).query(signupForCustomerQuery);
    console.log("signupForNewCustomer ran successfully.");
    return res.send(JSON.stringify(result));
  } catch (error) {
    return res.send(
      JSON.stringify({ error: `${email} is already an existing customer` })
    );
  }
};

/**
 * @description display all customers list
 * @param {*} req
 * @param {*} res
 * @returns all customer list
 */
const showAllCustomerDetails = async (req, res) => {
  const showAllCustomerDetailsQuery = `select * from customer`;

  try {
    const [result] = await (
      await flightReservationMySQLDatabaseFile()
    ).query(showAllCustomerDetailsQuery);
    console.log("showAllCustomerDetails ran successfully.");
    return res.send(JSON.stringify(result));
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

/**
 * @description display flight details between given source and destination airport
 * @param {*} req
 * @param {*} res
 * @returns particular flight list
 */
const searchFlightBetweenSourceAndDestination = async (req, res) => {
  const { sourceairport, destinationairport } = req.body;

  let searchFlightBetweenSourceAndDestinationQuery = `select * from flight_details where sourceairport = '${sourceairport}' and destinationairport = '${destinationairport}'`;

  console.log(sourceairport, destinationairport);

  try {
    const [result] = await (
      await flightReservationMySQLDatabaseFile()
    ).query(searchFlightBetweenSourceAndDestinationQuery);
    console.log("searchFlightBetweenSourceAndDestination ran successfully.");
    return res.send(JSON.stringify(result));
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

/**
 * @description does reservation on the basis of email and fid (flight id)
 * @param {*} req
 * @param {*} res
 * @returns reservation detail
 */
// reservation :
const reservation = async (req, res) => {
  let email = req.params.email;
  let fid = req.params.fid;

  let sqlQuery = `select customer.firstName, customer.lastName, flight_details.fid,flight_details.airline, flight_details.sourceairport,flight_details.destinationairport,flight_details.arrivaldate,flight_details.departuredate,reservation.status from customer inner join passenger on customer.email = passenger.email inner join reservation on reservation.email = passenger.email inner join flight_details on flight_details.fid = reservation.fid where reservation.email = '${email}' and flight_details.fid = ${fid}`;

  try {
    let res1 = await findCustomerById(email);

    if (res1 == "") {
      return res.status(400).json({
        error: `${email} is not an existing customer... Please register yourself`,
      });
    }

    const [result] = await (
      await flightReservationMySQLDatabaseFile()
    ).query(sqlQuery);
    console.log("reservation ran successfully.");
    return res.send(JSON.stringify(result));
  } catch (e) {
    console.log({ error: e.message });
    return res.status(400).json({ error: e.message });
  }
};

/**
 * @description cancelation of reservation
 * @param {*} req
 * @param {*} res
 * @returns reservation cancellation details
 */
const cancelReservation = async (req, res) => {
  let { email, fid } = req.params;

  const cancelReservationQuery = `update reservation set reservation.status = "B" where email = '${email}' and fid = ${fid};`;

  let result = await findCustomerById(email);
  if (result == "") {
    return res.status(400).json({
      error: `Please enter a valid email`,
    });
  }

  try {
    const [result] = await (
      await flightReservationMySQLDatabaseFile()
    ).query(cancelReservationQuery);
    console.log(result);

    if (result.affectedRows == 0) {
      return res.status(400).json({
        error: `You haven't booked the flight having fid ${fid}`,
      });
    }
    let checkValidFlightId = await searchFlightByFlightId(fid);

    console.log(`cancel reservation ran successfully.`);

    return res.send(
      JSON.stringify(
        `Your flight from ${checkValidFlightId.sourceairport} to ${checkValidFlightId.destinationairport} having fid ${fid} is cancelled now`
      )
    );
  } catch (error) {
    return await res
      .status(400)
      .json({ error: "An error ocurred while cancelling the reservation" });
  }
};

// check for existing customer :
/**
 * @description checks whether the customer is present or not
 * @param {*} req
 * @param {*} res
 * @returns particular customer detail
 */
const checkForExistingCustomer = async (req, res) => {
  try {
    let email = req.params.email;
    let result = await findCustomerById(email);

    if (result != "") {
      return res.send(JSON.stringify(result));
    }
    res.status(400).json({
      error: `${email} is not an existing customer... Please register yourself`,
    });
  } catch (error) {
    return await res
      .status(400)
      .json({ error: "An error ocurred while fetching existing customer" });
  }
};

// find customer by id :
/**
 * @description show all the details of particular customer
 * @param {*} email email id of customer
 * @returns details of particular customer having given email
 */
const findCustomerById = async (email) => {
  const sqlQuery = `select * from customer where email = '${email}'`;
  try {
    const [result] = await (
      await flightReservationMySQLDatabaseFile()
    ).query(sqlQuery);
    return result;
  } catch (e) {
    return {
      error: `Oops.. There is error in sql syntax.. Error : ${e.message}`,
    };
  }
};

/**
 * @description display all the flights of given source airport and destination airport
 * @param {*} fid
 * @returns source airport and destination airport
 */
const searchFlightByFlightId = async (fid) => {
  const searchFlightByFlightIdQuery = `select sourceairport, destinationairport from flight_details where fid = ${fid}`;

  try {
    const [result] = await (
      await flightReservationMySQLDatabaseFile()
    ).query(searchFlightByFlightIdQuery);
    return result[0];
  } catch (e) {
    return new Error("Error while searching flight");
  }
};

module.exports = {
  signupForNewCustomer,
  showAllCustomerDetails,
  checkForExistingCustomer,
  findCustomerById,
  reservation,
  searchFlightBetweenSourceAndDestination,
  cancelReservation,
};
