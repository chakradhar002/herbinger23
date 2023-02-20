const router = require('../Controller/TestController');
var express = require('express')
var connection = require('../Database/db').connection

/**
 * @description It will display the details of current person
 * @param {*} id 
 * @param {*} res 
 */
const showInfo=(id,res)=>{
    const query = `select * from person where pid='${id}' `
    connection.query(query, (err,result) => {
        if(err) throw err
        res.status(200).json(result)
        // console.log(result);
    });
};



/**
 * @description Give the deatails of all flights are available
 * @param {*} req 
 * @param {*} res 
 */

const getAllFlightDetails = (req,res) =>{
    const query = 'select * from flight_details';
    try{
    connection.query(query, (err,result) => {
        if(err) throw err
        console.log(result[0])
        console.log('Result [0] : ', result[0])
        res.send(JSON.stringify(result[0]));
    });}catch(error){
        return res.send(
            JSON.stringify({ error: `Flights are not available` })
          );
    }
};

/**
 * @description Search flights by source and destination
 * @param {*} req 
 * @param {*} res 
 */


const searchBySourceDestination = (req,res)=>{
   try{
    const {sourceairport,destinationairport} = req.body
    const query = `select * from flight_details where sourceairport='${sourceairport}' and destinationairport='${destinationairport}'`
    if(sourceairport = ""){
        return res.status(400).json(`Error : Source Airtport cannot be null`);
    }
    if(destinationairport = ""){
        return res.status(400).json(`Error : Destination Airtport cannot be null`);
    }
    
    connection.query(query, (err,result) => {
        if(err) throw err
        console.log(result)
        res.send(JSON.stringify(result));
    });
}catch (error) {
    return res.send(
      JSON.stringify({ error: `please enter valid source and destination` })
    );
  }
}

/**
 * @description Create new account of new person
 * @param {*} req 
 * @param {*} res 
 * @returns Details entered by person
 */
const createNewPerson = async (req,res)=>{
    try{
    const {fullname,email,password,address,passport_No} = req.body;

    console.log(email, address);
    
    const CreatePersonquery = `insert into person(fullname,email,password,address,passport_No) values("${fullname}","${email}","${password}","${address}","${passport_No}")`

    if (email == "")
    return res.status(400).json(`Error : email can not be empty`);
    if (fullname == "")
    return res.status(400).json(`Error : First Name can not be empty`);
    if (password == "")
    return res.status(400).json(`Error : Password can not be empty`);
    if (address == "")
    return res.status(400).json(`Error : address can not be empty`);
    if (passport_No == "")
    return res.status(400).json(`Error : passport_No can not be empty`);
    
    connection.query(CreatePersonquery,async(err,result)=>{
        if(err) throw err
        res.send(JSON.stringify("user created successfully"))       
    })}catch (error) {
        return res.send(
          JSON.stringify('error')
        );
      }
}

/**
 * @description 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const booking = (req,res)=>{
    try{
    const {tickettype,pid,fid} = req.body
    const query = `insert into booking(tickettype,pid,fid) values("${tickettype}","${pid}","${fid}")`
    
    if(tickettype = ""){
          return res.status(400).json(`Error : Ticket type cannot be null`);    
    }
    if(pid = ""){
        return res.status(400).json(`Error : person id cannot be null`);
    }
    if(fid = ""){
        return res.status(400).json(`Error : flight id cannot be null`);
    }

    connection.query(query,(err,result)=>{
        if(err) throw err
        res.send(JSON.stringify(result));
    })}catch(error){
        return res.send(JSON.stringify({error : `All fields are mandetory`}))
    }
}

/**
 * @description Reservation of the flight
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

const reservation = (req,res)=>{
    try{
    var booking_id = req.body.booking_id
    const query = `insert into reservation(booking_id) values ("${booking_id}")`
    if(booking_id = ""){
        return res.send(JSON.stringify({error : `Booking id cannot be null`}))

    }
    connection.query(query,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify(result));

    })}catch(e){
        return res.send(JSON.stringify({error : e.message}))
    }
}


/**
 * @description To cancel reservation of flight
 * @param {*} req 
 * @param {*} res 
 */
const cancelReservation = (req,res)=>{

    try{
    const {rid} = req.body
    const query = `update reservation set Status = "Canceled" where rid = "${rid}"`
    
    if(rid = ""){
        return res.send(JSON.stringify({error : `Reservation id cannot be null`}))

    }

    connection.query(query,(err,result)=>{
        if(err) throw err
        console.log("Flight canceled successfully");
        res.status(200).json(result)

    })} catch(error){
        return res.status(400).json({ error: "An error ocurred while cancelling the reservation" });
    }
}

module.exports = {
    getAllFlightDetails,
    searchBySourceDestination,
    createNewPerson,
    reservation,
    cancelReservation,
    booking
}