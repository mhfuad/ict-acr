const { EleventhForms, User } = require('../models');
const { TenthForms } = require('../models');
const { CRO_evaluations } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const AuthRepository = require('../repositories/authRepository')

class CroEvaluationRepository{

    async create(form_id, body){
        body.form_id = form_id
        const cro_eve = await CRO_evaluations.create(body);
        await EleventhForms.update({status: "done"},{where:{id:form_id}})
        const form = await EleventhForms.findOne({where:{id:form_id}})
        const user = await User.findOne({where:{idNo:form.userIdNo}})
        const cro = await User.findOne({where:{idNo:form.cro}})
        await AuthRepository.sendSMS(user.personalNumber,`Mr. ${user.name} (Applicant) your ACR approved by Mr. ${cro.name} (CRO)`);
        AuthRepository.sendMail(user.personalMail,`Mr. ${user.name} (Applicant) your ACR approved by Mr. ${cro.name} (CRO)`);
        return cro_eve;
    }

    async get(form_id){
        return await CRO_evaluations.findOne({where:{form_id:form_id}, attributes:{ exclude: ['createdAt','updatedAt'] }});
    }


    async all(){
        try{
            return await CRO_evaluations.findAll({attributes: { exclude: ['createdAt','updatedAt'] }})
        }catch (err){
            console.log(err)
        }
    }

    async update(id, data){
        const dbResponse = await CRO_evaluations.update({
            evaluation: data.evaluation,
            comment:data.comment,
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
        await CRO_evaluations.destroy({where: {form_id: id}})
    }
}

module.exports = new CroEvaluationRepository();