const joi = require("@hapi/joi");

const booking = {
    validateBooking: joi.object({
        source_location: joi.string().max(25).required(),
        destination_location: joi.string().max(25).required(),
        visa_type: joi.string().max(25).required(),
        passport_no: joi.number().integer().min(1111).message("passport number not valid").max(9999).message("passport number is not valid").required(),
        booking_type: joi.string().max(25).required(),
        meal_type: joi.string().max(25).required(),
        seat_select: joi.string().max(25).required(),
        ticket_type: joi.string().max(25).required(),
        email: joi.string().email().required()
    })
};

module.exports = booking;