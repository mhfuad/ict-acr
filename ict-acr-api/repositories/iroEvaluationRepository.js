const { Question } = require('../models');
const { TenthForms } = require('../models');
const { IRO_evaluation } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const { User } = require('../models')
const { EleventhForms } = require('../models');
const AuthRepository = require('../repositories/authRepository');
const { sendNotification } = require('../src/socket');

class IroEvaluationRepository{

    async create(form_id, body){
        body.form_id = form_id
        const eva = await IRO_evaluation.create(body);
        //send notification to CRO
        const cro_user = await User.findOne({
            where: {
                idNo: body.cro
            }
        });
        const user = await User.findOne({
            where: {
                idNo: body.user_id
            }
        });
        const form = await EleventhForms.findOne({
            where: {
                id: form_id
            }
        });
        const iro_user = await User.findOne({
            where: {
                idNo: form.iro
            }
        });
        await EleventhForms.update({status:"cro",updatedAt:new Date()},{where:{id:form_id}});
        if(cro_user){
            await AuthRepository.sendSMS(cro_user.personalNumber,`Mr./Ms. ${iro_user.englishName} (IRO) send to you Mr./Ms. ${user.englishName}'s (Applicant) ACR Evaluation for Approval. See the notification here.  https://acr.inflack.xyz`);
            AuthRepository.sendMail(cro_user.personalMail,`Mr./Ms. ${iro_user.englishName} (IRO) send to you Mr./Ms. ${user.englishName}'s (Applicant) ACR Evaluation for Approval. See the notification here.  https://acr.inflack.xyz`);
        }
        sendNotification('', {user : cro_user.idNo , message: `Mr./Ms. ${iro_user.englishName} (IRO) send to you Mr./Ms. ${user.englishName}'s (Applicant) ACR Evaluation for Approval.` })
        return eva;
    }

    async get(form_id){
        return await IRO_evaluation.findOne({where:{form_id:form_id}, attributes:{ exclude: ['createdAt','updatedAt'] }});
    }


    async all(){
        try{
            return await IRO_evaluation.findAll({attributes: { exclude: ['createdAt','updatedAt'] }})
        }catch (err){
            console.log(err)
        }
    }

    async update(id, data){
        return data;
        const dbResponse = await IRO_evaluation.update({
            user_id: data.user_id,
            evaluation_value: data.evaluation_value,
            decision: data.decision,
            cro: data.cro,
            cro_date: data.cro_date
            },
            {
                where:{form_id:id}
            }
        );
        return dbResponse;
    }
    
    async delete(id){
        await IRO_evaluation.destroy({where: {id: id}})
    }
}

module.exports = new IroEvaluationRepository();