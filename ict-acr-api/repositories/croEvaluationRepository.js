const { EleventhForms } = require('../models');
const { TenthForms } = require('../models');
const { CRO_evaluations } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')

class CroEvaluationRepository{

    async create(form_id, body){
        body.form_id = form_id
        const cro_eve = await CRO_evaluations.create(body);
        EleventhForms.update({status: "done"},{where:{id:form_id}})
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