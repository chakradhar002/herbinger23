const { validatePerson} = require('../personValidation/personSchema');

let addPersonValidation = async (req, res, next) => {
    const value = await validatePerson.validate(req.body);
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
 addPersonValidation
};