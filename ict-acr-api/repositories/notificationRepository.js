const { Notification } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')

class NotificationRepository{

    async create(body){
        return await Notification.create(body);
    }

    async get_by_user(user_id){
        return await Notification.findAll({where:{userId:user_id}, attributes:{ exclude: ['createdAt','updatedAt'] }});
    }

    async all(){
        try{
            return await Notification.findAll({attributes: { exclude: ['createdAt','updatedAt'] },order: [['id', 'DESC']]})
        }catch (err){
            console.log(err)
        }
    }

    async getUnReadNotification(user_id){
        return await Notification.count({where:{userId:user_id,viewed:0}})
    }

    async update(id){
        const dbResponse = await Notification.update({
            viewed: true
            },
            {
                where:{id:id}
            }
        );
        return dbResponse;
    }
    
    async delete(id){
        await Notification.destroy({where: {id: id}})
    }
}

module.exports = new NotificationRepository();