let connection = require('../flightdatabase/flightdatabase').con;
const {
   json
} = require('body-parser');
const controller = require('../flightcontroller/flightcontroller')

/**
 * person sign up 
 * @description:insert persons details
 * @param {*} req
 * @param {*} res
 */
const insertpersondetails = (req, res) => {
   let first_name = req.body.first_name;
   let last_name = req.body.last_name;
   let dob = req.body.dob;
   let email = req.body.email;
   let password = req.body.password;
   let address = req.body.address;

   let insertquery = `insert into person(first_name,last_name,dob,email,password,address) values ("${first_name}","${last_name}","${dob}","${email}","${password}","${address}")`;
   try {
      connection.query(insertquery, (err, data) => {

         console.log("Inserted!!")
         //showingInsertedRecord(data.insertId,req,res);
         console.log(data);

         res.send(JSON.stringify("Sign Up Successful!!"));

      })
   } catch (err) {
      throw ('Error : ' + err.message);
   }
};


/**
 * @description: show all from person table - with get
 * @param {*} req
 * @param {*} res
 */
const getpersonlist = (req, res) => {
   getquery = `select * from person`;
   try {
      connection.query(getquery, (err, data) => {
         if (err) throw err;
         console.log('Person details');
         res.status(200).json(data);
      })
   } catch (err) {
      throw ('Error :' + err.message);
   }
};

/**
 * @description: search for flight from flight details table - with get
 * @param {*} req
 * @param {*} res
 */
const searchflight = (req, res) => {
   let searchflight = `select * from flight_details`;

   try {
      connection.query(searchflight, (err, data) => {

         console.log("Flight Details");
         res.status(200).json(data);
      })
   } catch (err) {
      throw ('Error :' + err.message);
   }
};

/**
 * @description: booked flight by add deatils into booking table - with post
 * @param {*} req
 * @param {*} res
 */
const booking = (req, res) => {
   let person_id = req.body.person_id;
   let flight_id = req.body.flight_id;
   let passportno = req.body.passportno;
   let seat_type = req.body.seat_type;
   let meal = req.body.meal;

   let bookingquery = `insert into booking( person_id,flight_id,passportno,seat_type,meal) values (${person_id},${flight_id},'${passportno}','${seat_type}','${meal}')`;

   try {
      connection.query(bookingquery, (err, data) => {
         console.log("Booked Successfully");
         console.log(data);
         res.send(JSON.stringify("Booked Successfully!!"));
      })
   } catch (err) {
      throw ('Error :' + err.message);
   }
};

/**
 * @description: show reservation deatils  - with get
 * @param {*} req
 * @param {*} res
 */

const reservation = (req, res) => {
   let book_id = req.body.book_id;

   if (book_id == null) {
      res.status(200).json("Book id not given")
   } else {

      let reservationquery = `SELECT person.first_name,
        person.last_name,
        person.email ,
        flight_details.sourceairport,
        flight_details.destinationairport,
        booking.seat_type,
        booking.meal,
        booking.passportno
 FROM   person,
        flight_details,
        booking
 WHERE  person.person_id = booking.person_id
 AND    flight_details.flight_id = booking.flight_id
 AND    booking.book_id='${book_id}'`;


      try {
         connection.query(reservationquery, (err, data) => {
            console.log("Reservation successful!");
            console.log(data);
            // res.status(JSON.stringify(data))
            res.status(200).json(data);
         })
      } catch (err) {
         throw ('Error :' + err.message);
      }
   }
}

/**
 * @description: update book flight - with put
 * @param {*} req
 * @param {*} res
 */
const updatebooking = (req, res) => {
   let seat_type = req.body.seat_type;
   let meal = req.body.meal;
   let book_id = req.body.book_id;

   if (meal == null) {
      res.status(200).JSON("Choose meal!!");
   } else if (seat_type == null) {
      res.status(200).JSON("Choose seat type!!")
   } else {

      let updatequery = `UPDATE booking set seat_type='${seat_type}' , meal ='${meal}' where book_id=${book_id}`;

      try {
         connection.query(updatequery, (err, data) => {
            console.log("Updated");
            res.status(200).json("Updated Successful");
         })
      } catch (err) {
         throw ('Error :' + err.message);
      }
   }
}

/**
 * @description: cancel booked flight - with get
 * @param {*} req
 * @param {*} res
 */
const cancelbooking = (req, res) => {
   let book_id = req.body.book_id;

   let deletequery = `DELETE FROM booking WHERE book_id='${book_id}'`;

   if (book_id == null) {
      res.status(200).json("Book id not given")
   } else {
      try {
         connection.query(deletequery, (err, data) => {
            console.log("Deleted!!!");
            res.status(200).json("Successfully Canceled!!");
         })
      } catch (err) {
         throw ('Erros :' + err.message);
      }
   }
}


module.exports = {
   insertpersondetails,
   getpersonlist,
   searchflight,
   booking,
   reservation,
   updatebooking,
   cancelbooking
};