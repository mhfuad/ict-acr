const Joi = require('joi');

const roleValidation = Joi.object({
    name: Joi.string().min(4).max(10).required(),
    userId: Joi.number().required(),
});

module.exports = roleValidation;