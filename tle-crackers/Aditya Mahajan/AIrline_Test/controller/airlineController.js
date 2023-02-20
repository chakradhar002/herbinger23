const express = require('express');
// initialising router 
var router = express.Router()
// importing service file
const service = require('../service/airlineService');
// express-validator is a set of express.js middlewares use for validation
const { body, validationResult } = require('express-validator')
// below are the hapi/joi validators
const personValidation = require('../validation/personValidation/personValidation')
const flightValidation = require('../validation/flightValidation/flightValidation')
const bookingValidation = require('../validation/bookingValidation/bookingValidation')

// router to register a new user with the system
// validated with hapi/joi validator
router.post('/registerPerson', personValidation.addPersonValidation, async (req, res) => {
    try {
        const { first_name, last_name, gender, date_of_birth, email, phone_number, password, address, city, state, country } = req.body
        const result = await service.RegisterPerson(first_name, last_name, gender, date_of_birth, email, phone_number, password, address, city, state, country);
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

// router to get all the registered persons 
router.get('/getPerson', async (req, res, next) => {
    try {
        const result = await service.getPerson();
        res.status(200).json(result)
    } catch (error) {
        res.sendStatus(500);
    }
});

// router for adding new flight in the database
// validated with hapi/joi validator
router.post('/insertFlightRecord', flightValidation.addFlightValidation, async (req, res) => {
    try {
        const { airlines, aircraft, model_name, seating_capacity, source_location, destination_location, arrival_time, departure_time } = req.body
        const result = await service.addFLight(airlines, aircraft, model_name, seating_capacity, source_location, destination_location, arrival_time, departure_time);
        res.status(200).json(result)
    } catch (error) {
        res.sendStatus(500)
    }
})

// router for r=searching flights between source and destination
// validated with express-validator
router.post('/searchFlight', [
    body('source', 'Enter valid source ').isLength({ min: 3, max: 20 }),
    body('destination', 'Enter valid destination').isLength({ min: 3, max: 20 })
], async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        } else {
            const { source, destination } = req.body;
            const result = await service.searchFlight(source, destination);
            res.status(200).json(result)
        }
    } catch (error) {
        res.sendStatus(500);
    }
})

// router for making a new booking of flight
// this router executes multiple queries sequentially 
// validated with hapi/joi validator
router.post('/makeBooking', bookingValidation.addBookingValidation, async (req, res) => {
    try {
        const { source_location, destination_location, visa_type, passport_no, booking_type, meal_type, seat_select, ticket_type, email } = req.body;
        const result = await service.makeBooking(source_location, destination_location, visa_type, passport_no, booking_type, meal_type, seat_select, ticket_type, email);
        const getFlightId = await service.getFlightnumber(source_location, destination_location);
        const update = await service.allotFlightNumber(source_location, destination_location);
        res.status(200).json({ result, getFlightId, update })
    } catch (error) {
        res.sendStatus(500)
    }
})

// router for getting all the entries from booking table
router.get('/bookings', async (req, res) => {
    try {
        const result = await service.getAllBookings();
        res.status(200).json(result)
    } catch (error) {
        res.sendStatus(500)
    }
})

// displays a specfic record of reservation from the database 
router.post('/getSpecficReservationRecord', [
    body('email', 'Enter valid email').isEmail()
], async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        } else {
            const { email } = req.body;
            const result = await service.showReservationById(email);
            res.status(200).json(result)
        }
    } catch (error) {
        res.sendStatus(500)
    }
})

// router for deleting person record from database
router.delete('/deletePerson', [
    body('email', 'Enter valid email').isEmail()
], async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        } else {
            const { email } = req.body;
            const result = await service.deletePerson(email);
            res.status(200).json(result)
        }
    } catch (error) {
        res.sendStatus(500)
    }
})

// router for cancel the booking and setting status = cancelled
router.put('/updateBooking', [
    body('email', 'Enter valid email').isEmail()
], async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        } else {
            const { email } = req.body;
            const result = await service.cancelBooking(email);
            res.status(200).json(result)
        }
    } catch (error) {
        res.sendStatus(500)
    }
})
// router for updating password of user/ person
router.put('/updatePassword', [
    body('email', 'Enter valid email').isEmail(),
    body('phone_number', 'Enter valid phone number').isInt().isLength({ max: 10 })
], async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        } else {
            const { email } = req.body;
            const result = await service.cancelBooking(email);
            res.status(200).json(result)
        }
    } catch (error) {
        res.sendStatus(500)
    }
})
module.exports = router;