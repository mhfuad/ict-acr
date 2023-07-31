const { EleventhForms } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const { Reporter } = require('../models')
const AuthRepository = require('../repositories/authRepository')
const { User } = require('../models')

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

class eleventhFormRepository{

    async allForms(req){
        return await EleventhForms.findAll({});
    }

    async getOne(id){
        return await EleventhForms.findByPk(id);
    }

    async create(data){
        try{
            //form created
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
                status: "iro",
                createdAt: new Date(),
                updatedAt: null,
            });
            //reporter update
            Reporter.update({
                submited:1,
                joining_date_current_position: data.joining_date_current_position
            },{
                where:{id: data.reporterId}
            })
            //send notification to iro
            const iro = await User.findOne({
                where: {
                    idNo: data.iro
                }
            });
            if(iro){
                await AuthRepository.sendSMS(iro.personalNumber,`${data.userIdNo} has submited Form`);
                AuthRepository.sendMail(iro.personalMail,`${data.userIdNo} has submited Form`);
            }
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

    async findForCro(){
        try{
            const form = await EleventhForms.findAll({where:{status: "cro"}}, {attributes:{exclude:['createdAt','updatedAt']}})
            return form;
        }catch(err){
            return err
        }
    }

    async findForIro(){
        try{
            const form = await EleventhForms.findAll({where:{status: "iro"}}, {attributes:{exclude:['createdAt','updatedAt']}})
            return form;
        }catch(err){
            return err
        }
    }
}

module.exports = new eleventhFormRepository();