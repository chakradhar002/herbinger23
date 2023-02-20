/**
 * @description :this file contain all method for
 *  reserving flight get information about 
 * flight ,seat sign up for customer
 *  
 *  
 */
const router = require('../controller/flightcontroller')
const con = require('../db/mysqldb');

/**
 * @description :Show flight details
 * @param {*} req 
 * @param {*} res 
 */

const getFlightList = (req, res) => {
    const query = 'SELECT * FROM flight'
    try {
        con.connection.query(query, (err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    }
    catch {
        throw new Error("sorry! but can't get flight details for now ")
    }

};


/**
 * @description :Show seat list as per flight
 * @param {*} req 
 * @param {*} res 
 */
const getseatList = (req, res) => {
    let flight_id = req.body.flight_id;
    const query = `select * from flightdb.seat where available=true and flight_id='${flight_id}`;
    con.connection.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });

};


/**
 * @description :insert into customer
 * @param {*} req 
 * @param {*} res 
 */

///insert customer details
const insertCustomer = (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let phone_number = req.body.phone_number;
    let password = req.body.password;
    console.log(first_name);
    const query = `insert into customer (first_name,last_name,email,phone,password) values ('${first_name}','${last_name}','${email}','${phone_number}','${password}')`;
    try {
        con.connection.query(query, (err, result) => {
            if (err) throw err;
            let id = result.insertId;
            console.log(id);
            showCustomerDEtails(id, res);
        });
    } catch {
        throw new Error("you are not able to signup")
    }

}
const showCustomerDEtails = (id, res) => {
    const query = `select * from customer where customer_id='${id}'`
    con.connection.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
}


/**
 * @description :insert into Reservation by using id of all requred  
 * @param {*} req 
 * @param {*} res 
 */

const insertReservation = (req, res) => {
    let customer_id = req.body.customer_id;
    let flight_id = req.body.flight_id;
    let seat_id = req.body.seat_id;
    let food_id = req.body.food_id;
    // console.log(first_name);
    const query = `insert into reservation (customer_id,flight_id,seat_id,food_id) values ('${customer_id}','${flight_id}','${seat_id}','${food_id}')`;
    const query1 = `update seat set available = 0 where seat_id ='${seat_id}'`;
    try {
        con.connection.query(query, (err, result) => {
            if (err) throw err;
            let id = result.insertId;
            showReservationDetails(id, res);
        });
        //const query1 = `update seat set available = 0 where seat_id ='${seat_id}'`;
        con.connection.query(query1, (err, result) => {
            if (err) throw err;
            // res.status(200).json(result);
        });
    } catch (err) {
        throw new Error("you are not able to make reservation")
    }


}
/**
 * @description :   
 * @param {*} req 
 * @param {*} res show reservation details to customer
 */
const showReservationDetails = (id, res) => {
    const query = `select flight.flight_number ,flight.departure_date,flight.airline,customer.first_name as Name,
    (seat.price+food.price) as total_amount,customer.email,customer.phone,food.name as Meal,seat.seat_number,
    seat.class from reservation join customer on (customer.customer_id=reservation.customer_id) 
     join flight on  (flight.flight_id=reservation.flight_id) join seat on (seat.seat_id=reservation.seat_id) 
       join food on (food.food_id=reservation.food_id) where reservation_id='${id}'`;
    con.connection.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });

}

/**
 * @description :   
 * @param {*} req 
 * @param {*} res show flight list by sorce destination and date
 */


const getFlightBySourceDestination = (req, res) => {
    let source = req.body.source;
    let destination = req.body.destination;
    let date = req.body.date;
    const query = `select flight.flight_id,flight.flight_number,flight.source,flight.destination,flight.departure_time,flight.arrival_time from flight where source ='${source}' and destination='${destination}' and departure_date='${date}'`;
    try {
        con.connection.query(query, (err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    }
    catch {
        throw new Error("you are not able to fetch flight details for now ")
    }

};
/**
 * @description :Get Food menu
 * @param {*} req 
 * @param {*} res 
 */
const getFoodMenu = (req, res) => {
    const query = 'SELECT * FROM food'
    con.connection.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });

};


/**
 * @description :Get Reservation by reservation_id
 * @param {*} req 
 * @param {*} res 
 */
const getReservation = (req, res) => {
    let reservation_id = req.body.reservation_id;
    const query = `select flight.flight_number ,flight.departure_date,flight.airline,customer.first_name as Name,
    (seat.price+food.price) as total_amount,customer.email,customer.phone,food.name as Meal,seat.seat_number,seat.class from reservation join customer on (customer.customer_id=reservation.customer_id)  join flight on  (flight.flight_id=reservation.flight_id) join seat on (seat.seat_id=reservation.seat_id)   join food on (food.food_id=reservation.food_id) where reservation_id='${reservation_id}'`;
    try {
        con.connection.query(query, (err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    }
    catch {
        throw new Error("you are not able to get reservation")
    }

};


/**
 * @description :updateSeat using reservation id
 * @param {*} req 
 * @param {*} res 
 */
const updateReservation = (req, res) => {
    let reservation_id = req.body.reservation_id;
    let seat_id = req.body.seat_id;
    const query = `UPDATE reservation
    SET seat_id = '${seat_id}'
    WHERE reservation_id = '${reservation_id}'`;
    try {
        con.connection.query(query, (err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } catch {
        throw new Error("you are not able to make reservation")
    }

};

/**
 * @description :cancle reservation 
 * @param {*} req 
 * @param {*} res 
 */
const deleteReservation = (req, res) => {
    let reservation_id = req.body.reservation_id;
    const query = `DELETE FROM reservation WHERE reservation_id='${reservation_id}'`;
    con.connection.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });

};









module.exports = {
    getFlightList,
    insertCustomer,
    deleteReservation,
    getFlightBySourceDestination,
    getseatList,
    getFoodMenu,
    insertReservation,
    getReservation,
    updateReservation

};