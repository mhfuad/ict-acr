const { EleventhForms, Reporter } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const AuthRepository = require('../repositories/authRepository')
const { User } = require('../models')
const {sendNotification} = require("../src/socket");

class eleventhFormRepository{

    async allForms(req){
        //return await EleventhForms.findAll({});
        try {
            const results = await sequelize.query(`SELECT f.id,f.name, f.userIdNo, f.highestEducationLevel, 
                            f.dateOfBirth, f.joiningDate, f.departmentExamPass, f.departmentExamDate, f.jobStatus,
                            f.acrStart, f.acrEnd, f.language, f.specialTraining, f.designation, f.salary, f.iro,
                            f.cro, f.userId, f.status, f.createdAt, repo.joining_date_current_position, f.reporter_id,
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
            //send Message
            if(iro){
                await AuthRepository.sendSMS(iro.personalNumber,`${data.name}, requests to you ACR Evaluation. See the notification here.  https://acr.inflack.xyz`);
                AuthRepository.sendMail(iro.personalMail,`${data.name}, requests to you for ACR Evaluation. See the notification here.  https://acr.inflack.xyz`);
            }

            sendNotification('', {user : data.iro, message: `${data.name}(${data.userIdNo}), requests to you ACR Evaluation.` })

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
            status: data.status
        },
        {where:{reporter_id: id}});

        await Reporter.update({
            submited: 1
        },{where:{id:data.reporter_idid}})

        return 1;
        // if(dbResponse == 1){
        //     return await EleventhForms.findByPk(id);
        // }
    }
    async cro_to_iro(id,data){
        const re = await EleventhForms.update({
            status: data.status
        },{
            where:{id:id}
        })
        return re
    }
    async delete(id){
        await EleventhForms.destroy({where: {id: id}})
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