const Joi = require('joi');

const roleValidation = Joi.object({
    name: Joi.string().min(4).max(10).required(),
    name_bn: Joi.string().required(),
    branchId: Joi.string().required(),
    code: Joi.string().required(),
});

module.exports = roleValidation;