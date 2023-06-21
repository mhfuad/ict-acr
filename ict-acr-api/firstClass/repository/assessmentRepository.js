const { Question } = require('../models');
const { TenthForms } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
class AssessmentRepository{

    async getFormsQuestions(id){
        return await Question.findAll({
            where: {
                TenthFormId: id
            }
        })
    }


    async creatFormsQuestions(req){
        //return req.formId;
        const form = TenthForms.findByPk( req.formId);

        return await Question.findAll();
    }

    async getOne(id){
        return await TenthForms.findByPk(id);
    }

    async create(data){
        try{
            return await TenthForms.create({
                name: data.name,
                userIdNo: data.userIdNo,
                highestEducationLevel: data.highestEducationLevel,
                dateOfBirth: data.dateOfBirth,
                jobDuration: data.jobDuration,
                acrStart: data.acrStart,
                acrEnd: data.acrEnd,
                language: data.language,
                specialTraining: data.specialTraining,
                designation: data.designation,
                timeDuration: data.timeDuration,
                salary: data.salary,
                iro: data.iro,
                cro: data.cro,
                userId: data.userId,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
        }catch (err){
            console.log(err)
        }
    }

    async update(id, data){
        const dbResponse = await TenthForms.update({
                name: data.name,
                userIdNo: data.userIdNo,
                highestEducationLevel: data.highestEducationLevel,
                dateOfBirth: data.dateOfBirth,
                jobDuration: data.jobDuration,
                acrStart: data.acrStart,
                acrEnd: data.acrEnd,
                language: data.language,
                specialTraining: data.specialTraining,
                designation: data.designation,
                timeDuration: data.timeDuration,
                salary: data.salary,
                iro: data.iro,
                cro: data.cro,
                userId: data.userId
            },
            {
                where:{id: id}
            }
        );
        return dbResponse;
    }
    async delete(id){
        await AssessmentRepository.destroy({where: {id: id}})
    }
}

module.exports = new AssessmentRepository();