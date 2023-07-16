const { Question } = require('../models');
const { TenthForms } = require('../models');
const { EleventhAssessments } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')

class EleventhAssessmentRepository{

    async create(form_id, body){
        const questionLenght = Object.keys(body).length
        if(questionLenght != 18){
            return "missing";
        }
        const newData = body.map((item, index) => ({
            ...item,
            formId: form_id
          }));
        const result = await EleventhAssessments.bulkCreate(newData)
        return result;
    }

    async getFormsQuestions(form_id){
        return await EleventhAssessments.findAll({where:{formId:form_id}});
    }

    // async create(body){
    //     try{
    //         return await Assessment.bulkCreate(body)
    //     }catch (err){
    //         console.log(err)
    //     }
    // }

    // async update(id, data){
    //     const dbResponse = await TenthForms.update({
    //             name: data.name,
    //             userIdNo: data.userIdNo,
    //             highestEducationLevel: data.highestEducationLevel,
    //             dateOfBirth: data.dateOfBirth,
    //             jobDuration: data.jobDuration,
    //             acrStart: data.acrStart,
    //             acrEnd: data.acrEnd,
    //             language: data.language,
    //             specialTraining: data.specialTraining,
    //             designation: data.designation,
    //             timeDuration: data.timeDuration,
    //             salary: data.salary,
    //             iro: data.iro,
    //             cro: data.cro,
    //             userId: data.userId
    //         },
    //         {
    //             where:{id: id}
    //         }
    //     );
    //     return dbResponse;
    // }
    // async delete(id){
    //     await AssessmentRepository.destroy({where: {id: id}})
    // }
}

module.exports = new EleventhAssessmentRepository();