const { Access_log } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')

class AccessLogRepository{

    async create(body){
        return await Access_log.create(body);
    }

    async get_by_user(user_id){
        return await Access_log.findAll({where:{user_id:user_id}, attributes:{ exclude: ['createdAt','updatedAt'] }});
    }

    async all(){
        try{
            return await Access_log.findAll({attributes: { exclude: ['createdAt','updatedAt'] },order: [['id', 'DESC']]})
        }catch (err){
            console.log(err)
        }
    }

    async allWithPagination(req){
        const PAGE_SIZE = 10;
        const page = parseInt(req.params.page, 10);
        const offset = (page - 1) * PAGE_SIZE;

        try{
            const logs = await Access_log.findAll({
                attributes: { exclude: ['createdAt','updatedAt'] },
                limit: PAGE_SIZE,
                offset: offset,
                order: [['id','DESC']]
            });
            const totalCount = await Access_log.count();
            const totalpages = Math.ceil(totalCount / PAGE_SIZE);
            const result = {
                page:page,
                totalpages: totalpages,
                logs: logs
            }
            return result
        }catch (error) {
            console.error('Error fetching paginated users:', error);
            return 500;
        }

        try{
            return await Access_log.findAll({attributes: { exclude: ['createdAt','updatedAt'] },order: [['id', 'DESC']]})
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

module.exports = new AccessLogRepository();