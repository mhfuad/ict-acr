const { EleventhForms } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const { Assessment } = require('../models')
class eleventhFormRepository{

    async allForms(req){
        return await EleventhForms.findAll();
    }

    async getOne(id){
        return await EleventhForms.findByPk(id, {
            include: [{
                model: Assessment
            }]
        });
    }

    async create(data){
        try{
            return await EleventhForms.create({
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
        const dbResponse = await EleventhForms.update({
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
        await EleventhForms.destroy({where: {id: id}})
    }
}

module.exports = new eleventhFormRepository();