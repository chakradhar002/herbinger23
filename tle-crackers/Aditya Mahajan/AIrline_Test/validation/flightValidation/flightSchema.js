const joi = require("@hapi/joi");

const flight = {
    validateFlight: joi.object({
        airlines: joi.string().max(40).required(),
        aircraft: joi.string().max(30).required(),
        model_name: joi.string().max(30).required(),
        seating_capacity: joi.number().integer().min(8).message("Seating capacity is very low hence not valid").max(900).message("seating capacity is very high, no such aircraft designed yet like this").required(),
        source_location: joi.string().max(40).required(),
        destination_location: joi.string().max(40).required(),
        arrival_time: joi.string().max(40).required(),
        departure_time: joi.string().max(40).required()
    })
};

module.exports = flight;