const { validateBooking } = require('../bookingValidation/bookingSchema');

let addBookingValidation = async (req, res, next) => {
    const value = await validateBooking.validate(req.body);
    if (value.error) {
        res.json({
            success: 0,
            message: value.error.details[0].message
        })
    } else {
        next();
    }
}


module.exports = {
    addBookingValidation
};