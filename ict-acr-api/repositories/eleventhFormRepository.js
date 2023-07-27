const { EleventhForms } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const { Reporter } = require('../models')

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

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
            Reporter.update({
                submited:1
            },{
                where:{id: data.reporterId}
            })
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

    sendNotificationToUser(userId, message) {
        const socketId = connectedUsers.get(userId);
        if (socketId) {
          io.to(socketId).emit('notification', message);
          console.log(`Notification sent to User ${userId}`);
        } else {
          console.log(`User ${userId} is not connected`);
        }
    }
}

module.exports = new eleventhFormRepository();