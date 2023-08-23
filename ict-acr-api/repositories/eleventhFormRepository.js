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
        //return await EleventhForms.findAll({});
        try {
            const results = await sequelize.query(`SELECT f.id,f.name, f.userIdNo, f.highestEducationLevel, 
                            f.dateOfBirth, f.joiningDate, f.departmentExamPass, f.departmentExamDate, f.jobStatus,
                            f.acrStart, f.acrEnd, f.language, f.specialTraining, f.designation, f.salary, f.iro,
                            f.cro, f.userId, f.status, f.createdAt, repo.joining_date_current_position,
                             repo.designation as acr_designation
                    FROM EleventhForms f
                    INNER JOIN Reporters repo
	                    ON f.reporter_id = repo.id`,{
                //replacements: {user_id:user_id},
                type: sequelize.QueryTypes.SELECT,
                model: EleventhForms
            })
            return results
        } catch (error) {
            console.error('Error:', error.message);
            return error.message
        }
    }

    async allFormsPaginat(req){
        const PAGE_SIZE = 10;
        const page = parseInt(req.params.page, 10);
        const offset = (page - 1) * PAGE_SIZE;
        try {
            const forms = await sequelize.query(`SELECT f.id,f.name, f.userIdNo, f.highestEducationLevel, 
                            f.dateOfBirth, f.joiningDate, f.departmentExamPass, f.departmentExamDate, f.jobStatus,
                            f.acrStart, f.acrEnd, f.language, f.specialTraining, f.designation, f.salary, f.iro,
                            f.cro, f.userId, f.status, f.createdAt, repo.joining_date_current_position,
                            repo.designation as acr_designation
                    FROM EleventhForms f
                    INNER JOIN Reporters repo
	                    ON f.reporter_id = repo.id
                    LIMIT :limit
                    OFFSET :offset`,{
                replacements: {limit:PAGE_SIZE, offset: offset},
                type: sequelize.QueryTypes.SELECT,
                model: EleventhForms
            })
            const totalCount = await await sequelize.query(`SELECT COUNT(f.id) AS total
                                    FROM EleventhForms f
                                    INNER JOIN Reporters repo
                                        ON f.reporter_id = repo.id`,{
                type: sequelize.QueryTypes.SELECT,
                });
            const totalpages = Math.ceil(totalCount[0]['total'] / PAGE_SIZE);
            console.log("======================="+totalpages)
            const results= {
                page: page,
                totalpages: totalpages,
                forms: forms,
            }
            return results;
        } catch (error) {
            //console.error('Error:', error.message);
            return error.message
        }
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
                reporter_id: data.reporterId,
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
                await AuthRepository.sendSMS(iro.personalNumber,`${data.name}, requests to you ACR Evaluation. See the notification here.  http://www.acr.ictd.gov.bd `);
                AuthRepository.sendMail(iro.personalMail,`${data.name}, requests to you for ACR Evaluation. See the notification here.  http://www.acr.ictd.gov.bd`);
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

    async findForCro(req){
        const PAGE_SIZE = 10;
        const page = parseInt(req.params.page, 10);
        const offset = (page - 1) * PAGE_SIZE;

        try{
            const forms = await EleventhForms.findAll({
                where: {status: "cro"}, 
                attributes: {exclude:['createdAt','updatedAt']},
                limit: PAGE_SIZE,
                offset: offset,
            })
            const totalCount = await EleventhForms.count({where: {status: "cro"}});
            const totalpages = Math.ceil(totalCount / PAGE_SIZE);
            const result = {
                page:page,
                totalpages: totalpages,
                forms: forms
            }
            return result
        }catch(err){
            return err
        }
    }

    async findForIro(req){
        const PAGE_SIZE = 10;
        const page = parseInt(req.params.page, 10);
        const offset = (page - 1) * PAGE_SIZE;

        try{
            const forms = await EleventhForms.findAll({
                where: {status: "iro"}, 
                attributes: {exclude:['createdAt','updatedAt']},
                limit: PAGE_SIZE,
                offset: offset,
            })
            const totalCount = await EleventhForms.count({where: {status: "iro"}});
            const totalpages = Math.ceil(totalCount / PAGE_SIZE);
            const result = {
                page:page,
                totalpages: totalpages,
                forms: forms
            }
            return result
        }catch(err){
            return err
        }
    }

    async doneForm(req){
        const PAGE_SIZE = 10;
        const page = parseInt(req.params.page, 10);
        const offset = (page - 1) * PAGE_SIZE;

        try{
            const forms = await EleventhForms.findAll({
                where: {status: "done"}, 
                attributes: {exclude:['createdAt','updatedAt']},
                limit: PAGE_SIZE,
                offset: offset,
            })
            const totalCount = await EleventhForms.count({where: {status: "done"}});
            const totalpages = Math.ceil(totalCount / PAGE_SIZE);
            const result = {
                page:page,
                totalpages: totalpages,
                forms: forms
            }
            return result
        }catch(err){
            return err
        }
    }
}

module.exports = new eleventhFormRepository();