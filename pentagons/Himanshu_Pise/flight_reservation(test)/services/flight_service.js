const router = require("../controller/flight_controller");
var connection = require("../db/sql_connection");

 /**
 * @description : Create(make)  reservation
 */

const create_reservation = (req, res) => {

  var rid = req.body.rid;
  var fid = req.body.fid;
  var email = req.body.email;
  var seat_no = req.body.seat_no;
  var status = req.body.status;
  var tickettype = req.body.tickettype;
  var bookingdate = req.body.bookingdate;

  let q1 = `INSERT INTO flight_database.reservation values('${rid}','${fid}','${email}','${seat_no}',
  '${status}','${tickettype}','${bookingdate}');`;

  connection.query(q1, (err, result) => {
    if (err) throw err;
      connection.query("SELECT * FROM flight_database.reservation", (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
  });
};

 /**
 * @description :modify reservation(make changes in reservations)
 */
const modify_reservation = (req, res) => {
  console.log("fasd ::", req);
  var id = req.params.id;
  var fid = req.body.fid;
  var email = req.body.email;
  var seat_no = req.body.seat_no;
  var status = req.body.status;
  var tickettype = req.body.tickettype;
  var bookingdate = req.body.bookingdate;

  let q1 = `UPDATE flight_database.reservation SET fid='${fid}',email='${email}',seat_no='${seat_no}',
  status='${status}',tickettype='${tickettype}',bookingdate='${bookingdate}' WHERE rid='${id}' ;`

  connection.query(q1, (err, result) => {
    if (err) console.log(err);
    res.status(200).json(result);

    connection.query("SELECT * FROM flight_database.reservation", (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
  });

};

 /**
 * @description : Cancel reservation
 */
const cancel_reservationbyid = (req, res) => {

    var id=req.params.id;
      let q1=`SELECT * FROM flight_database.reservation WHERE rid=${id};`
      connection.query(q1,(err,result) => { 
        if (err) throw err;
        res.status(200).json(result); })

      let q2=`Delete FROM flight_database.reservation WHERE rid=${id};`
    connection.query(q2,(err, result)=> { 
      if (err) throw err;
      res.status(200).json(result);
      res.status(200).json({msg: "Above Record Will be Deleted"});

    });
};

 /**
 * @description : Check Menus availability as per Customer choice
 */

const get_menudetailsbyitem = (req, res) => {
  var email=req.body.email;
  var mealname = req.body.mealname;
  console.log(mealname)
  q1=`SELECT mid FROM flight_database.menu where mealname ='${mealname}' limit 1;`
   connection.query(q1, (err, result) => {
    if (err) throw res.status(404).json({msg : "Menu item is not Available"});

      if (result.length==0){
        res.status(404).json({msg:"Menu item is out of stock"});
      }
      else{
        q1=`UPDATE flight_database.passenger SET mid = '${result.mid}' WHERE email = '${email}' ;`
        connection.query(q1,(err,result) => {
        res.status(200).json({msg:"Menu is available"});
      });
      }
   });

  };


/**
 * @description : Check Availability of seats
 */

const seat_available = (req, res) => {
  var seatno = req.params.seatno
  const seat_available = [1,2,3,4,5];

  if (seat_available.includes(Number(seatno))){
    res.status(200).json({msg:"Seat is available"});
  }
  else{
    res.status(200).json({msg:"Seat is not available"});
  }

};

 /**
 * @description : Insert Record of a Customer
 */
const signup = (req, res) => {
  var email = req.body.email;
  var firstname = req.body.firstame;
  var lastname = req.body.lastname;
  var gender = req.body.gender;
  var dob = req.body.dob;
  var password = req.body.password;
  var aid = req.body.aid;
  var noofreservations = req.body.noofreservations;

  let q1 = `INSERT INTO flight_database.customer values('${email}','${firstname}','${lastname}','${gender}',
  '${dob}','${password}','${aid}','${noofreservations}');`;
  connection.query(q1, (err, result) => {
    if (err) throw err;
    res.status(200).json({msg:"Data Successfully inserted"});
  });
};

 /**
 * @description : To track Flights whether it is suitable for Passenger
 */
const sourcedestination = (req,res) => {
  try {
    connection.query("SELECT sourceairport,destinationairport,arrivaldate,departuredate FROM flight_database.flight_details ;", (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
         });

  } catch (error) {
      console.error(error);
  }

}


module.exports = {create_reservation,
                  modify_reservation,
                  cancel_reservationbyid,
                  get_menudetailsbyitem,
                  seat_available,
                  sourcedestination,
                  signup};
