const Joi = require('joi');

const roleValidation = Joi.object({
    userId: Joi.number().required(),
    iro : Joi.string().required(),
    user_id : Joi.number().required(),
    gread : Joi.number().required(),
    designation : Joi.string().required(),
    cro : Joi.string().required(),
    joining_date_current_position : Joi.string().required(),
    start_date : Joi.string().required(),
    end_date : Joi.string().required(),
});

module.exports = roleValidation;