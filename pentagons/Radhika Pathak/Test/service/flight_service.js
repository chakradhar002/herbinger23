const router = require('../controller/flight_controller');
var connection = require('../db/connection');
/**
 * @author Radhika Pathak
 */
/**
 * @description get the person details
 * @param {*} req
 * @param {*} res
 */
const getDetails = (req, res) => {

    console.log("in this method");
    let displayperson = "select * from person";
    connection.query(displayperson, (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })

};
/**
 * @description sign up new customer
 * @param {*} req
 * @param {*} req
 */
const signup = (req, res) => {
    let firstname = req.body.first_name;
    let lastname = req.body.last_name;
    let email = req.body.email;
    let password = req.body.password;

    let insertperson = `insert into person (first_name,last_name,email,password) values ('${firstname}','${lastname}','${email}','${password}')`;
    connection.query(insertperson, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(200).json({ message: "Sign Up Successfull for " + firstname + "." });

    });
    //to display inserted data in json
    /*connection.query(`select * from person where first_name='${firstname}' and last_name='${lastname}' `,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    });*/
}
/**
 * @description book a flight and make a reservation
 * @param {*} req 
 * @param {*} res 
 * 
 */
const doreservation = (req, res) => {
    let pid = req.body.pid;
    let fid = req.body.fid;
    let mid = req.body.mid;

    let booking = `insert into reservation(fid,pid,mid) values ('${fid}','${pid}','${mid}') `;
    console.log(pid);
    console.log(fid);
    console.log(mid);
    connection.query(booking, (err, result) => {
        //if (err) throw err;
        if (result.affectedRows > 0) {
            
            let rid = result.insertId;
            console.log(rid);
            let displaydetails = `select person.first_name,person.last_name
            ,person.email,flight_details.airline,
            flight_details.source,
            flight_details.destination,flight_details.start_date,flight_details.end_date from person,flight_details,reservation
             where person.pid =reservation.pid and flight_details.fid = reservation.fid 
            and reservation.rid='${rid}' `;
            connection.query(displaydetails, (err, result) => {
                if (err) throw err;
                res.status(200).json(result);
            })
        }
        else
            res.status(404).json({ msg: "Booking Failed" });
    });
}


/**
 * @description modify a reservation
 * @param {*} req 
 * @param {*} res 
 * 
 */
const updateReservation =(req,res)=>{
    let id = req.params.id;
    let class_type = req.body.class_type;
    let updateQuery=` update reservation set class='${class_type}' where pid='${id}' ` ;
    connection.query(updateQuery,(err,result)=>{
        if(err) throw err;
        //res.status(200).json(result);
        res.send(JSON.stringify("Updated class to "+ class_type));
    });
}


/**
 * @description cancel a reservation
 * @param {*} req 
 * @param {*} res 
 * 
 */
const deleteBooking = (req, res) => {
    var id = req.params.id;
    let deleteData = `delete from reservation where rid ='${id}' `;
    connection.query(deleteData, (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0)
            res.status(200).json({ msg: "Booking Cancelled" });
        else {
            res.status(200).json({ msg: "Booking Cannot be Cancelled" });
        }
    })
}


/**
 * @description to select a seat as per customers choice
 * @param {*} req 
 * @param {*} res 
 * 
 */
const searchSeat = (req, res) => {
    let seat_number = req.body.seatno;
    seats_available = [34, 56, 44, 52, 1, 37, 98, 22];
    console.log(seat_number);
    if (seats_available.includes(Number(seat_number))) {
        res.status(200).json({ msg: "Seat is available.You can book your seat" });
    }
    else {
        res.status(200).json({ msg: "Seat is not available" });
    }
}


/**
 * @description select food 
 * @param {*} req 
 * @param {*} res 
 * 
 */
const selectFood = (req, res) => {
    let food = req.body.meal_type;
    let chkfood = `SELECT * from meal WHERE meal_type='${food}'`;
    console.log(chkfood);
    connection.query(chkfood, (err, result) => {
        console.log(result)
        if (result.length == 0) {
            res.status(404).json({ msg: "food not available" });
        }
        else {
            res.status(200).json({ msg: "Food is available" });
        }
    });
}

/**
 * @description search for a flight
 * @param {*} req 
 * @param {*} res 
 * 
 */
const getFlight = (req, res) => {
    let source = req.body.source;
    let destination = req.body.destination;
    let searchQuery = `select * from flight_details where source='${source}' and destination ='${destination}' `;
    connection.query(searchQuery, (err, result) => {
        if (err) throw err;
        if (result.length <= 0) {
            res.send(JSON.stringify("Sorry there are no flights available"));
        }
        else {
            res.status(200).json(result);
        }
    });
}

module.exports = {
    getDetails,
    getFlight,
    signup,
    doreservation,
    updateReservation,
    selectFood,
    searchSeat,
    deleteBooking
};