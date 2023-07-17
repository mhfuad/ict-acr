const { Question } = require('../models');
const { TenthForms } = require('../models');
const { IRO_evaluation } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')

class IroEvaluationRepository{

    async create(form_id, body){
        body.form_id = form_id
        return await IRO_evaluation.create(body);
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