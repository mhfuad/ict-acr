const Joi = require('joi');

const roleValidation = Joi.object({
    wingId: Joi.string().required(),
    name: Joi.string().min(4).max(10).required(),
});

module.exports = roleValidation;