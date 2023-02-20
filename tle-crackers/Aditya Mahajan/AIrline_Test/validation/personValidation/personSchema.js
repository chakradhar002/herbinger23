const joi = require("@hapi/joi");

const person = {
    validatePerson: joi.object({
        first_name: joi.string().max(30).required(),
        last_name: joi.string().max(30).required(),
        gender: joi.string().valid("m", "f").required(),
        date_of_birth: joi.date().required(),
        email: joi.string().email().required(),
        phone_number: joi.number().integer().min(10000000000).message("Invalid mobile number").max(99999999999).message("Invalid mobile number").required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        address: joi.string().max(100).required(),
        city: joi.string().max(50).required(),
        state: joi.string().max(50).required(),
        country: joi.string().max(50).required()
    })
};

module.exports = person;