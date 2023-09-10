const Joi = require('joi');

const eleventhFormValidation = Joi.object({
    name: Joi.string().min(4).max(10).required(),
    userIdNo: Joi.number().required(),
    highestEducationLevel: Joi.number().required(),
    dateOfBirth: Joi.number().required(),
    joiningDate: Joi.number().required(),
    joining_date_current_position: Joi.number().required(),
    departmentExamPass: Joi.number().required(),
    departmentExamDate: Joi.number().required(),
    jobStatus: Joi.number().required(),
    acrStart: Joi.number().required(),
    language: Joi.number().required(),
    specialTraining: Joi.number().required(),
    designation: Joi.number().required(),
    salary: Joi.number().required(),
    iro: Joi.number().required(),
    cro: Joi.number().required(),
    reporterId: Joi.number().required(),
    userId: Joi.number().required(),
});

module.exports = eleventhFormValidation;