const { EleventhForms } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const { Assessment } = require('../models')
class eleventhFormRepository{

    async allForms(req){
        return await EleventhForms.findAll();
    }

    async getOne(id){
        return await EleventhForms.findByPk(id);
    }

    async create(data){
        try{
            const form =  await EleventhForms.create({
                name: data.name,
                userIdNo: data.userIdNo,
                highestEducationLevel: data.highestEducationLevel,
                dateOfBirth: data.dateOfBirth,
                joiningDate: data.joiningDate,
                departmentExamPass: data.departmentExamPass,
                departmentExamDate: data.departmentExamDate,
                jobStatus: data.jobStatus,
                acrStart: data.acrStart,
                acrEnd: data.acrEnd,
                language: data.language,
                specialTraining: data.specialTraining,
                designation: data.designation,
                salary: data.salary,
                iro: data.iro,
                cro: data.cro,
                userId: data.userId,
                createdAt: new Date(),
                updatedAt: null,
            });
            return form;
        }catch (err){
            console.log(err)
        }
    }

    async update(id, data){
        const dbResponse = await EleventhForms.update({
            name: data.name,
            userIdNo: data.userIdNo,
            highestEducationLevel: data.highestEducationLevel,
            dateOfBirth: data.dateOfBirth,
            joiningDate: data.joiningDate,
            departmentExamPass: data.departmentExamPass,
            departmentExamDate: data.departmentExamDate,
            jobStatus: data.jobStatus,
            acrStart: data.acrStart,
            acrEnd: data.acrEnd,
            language: data.language,
            specialTraining: data.specialTraining,
            designation: data.designation,
            salary: data.salary,
            iro: data.iro,
            cro: data.cro,
            userId: data.userId,
            updatedAt: new Date(),
        },
        {where:{id: id}});
        if(dbResponse == 1){
            return await EleventhForms.findByPk(id);
        }
    }
    async delete(id){
        await EleventhForms.destroy({where: {id: id}})
    }
}

module.exports = new eleventhFormRepository();