const { Reporter, User } = require('../models');
const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const jwt = require('jsonwebtoken');
const config = require('../config/index')

class ReporterRepository{

    async create(body){
        
        // const [results, metadata] = await sequelize.query('SELECT * FROM Reporters where user_id = :user_id && start_date > :start_date && end_date < :end_date ',{
        //     replacements: { user_id: body.user_id, start_date: body.start_date, end_date: body.end_date },
        //     type: sequelize.QueryTypes.SELECT,
        //     model: Reporter,
        // })
        // return results;
        try{
            body.submited = false;
            const data = await Reporter.create(body);
            return data;
        }catch (e){
            return e;
        }
    }

    async getIRO(user){
        try{
            const data = await Reporter.findAll({
                attributes:['iro'],
                where:{
                    user_id: user
                }
            })
            return data;
        }catch (e){
            return e;
        }
    }

    async getCRO(user){
        try{
            const data = await Reporter.findAll({
                attributes:['cro'],
                where:{
                    user_id: user
                }
            })
            return data;
        }catch (e){
            return e;
        }
    }

    async all(){
        try{
            const data = await Reporter.findAll({attributes: { exclude: ['createdAt','updatedAt'] }})
            return data;
        }catch (e){
            return e;
        }
    }
    
    async delete(id){
        try{
            const data = await Reporter.destroy({where: {id: id}})
            if(data == 1){
                return "Reporter delete successfull.";
            }
            
        }catch (e){
            return e;
        }
    }

    async getReporterByUser(user_id){
        try {
            const results = await sequelize.query(`SELECT 
            r.iro, r.cro, r.start_date, r.end_date, r.gread, r.designation, r.joining_date_current_position, r.submited, iu.banglaName as iro_bangla_name, iu.englishName as iro_name, cu.banglaName as cro_bangla_name, cu.englishName as cro_name
            FROM 
                Reporters as r 
            JOIN Users as iu
                ON r.iro = iu.idNo
            JOIN Users as cu
                ON r.cro = cu.idNo
            where r.user_id = :user_id`,{
                replacements: {user_id:user_id},
                type: sequelize.QueryTypes.SELECT,
                model: User
            })
            return results
        } catch (error) {
            console.error('Error:', error.message);
            return error.message
        }
        /*
        SELECT 
        r.iro, r.cro, r.start_date, r.end_date, r.gread, r.designation, r.joining_date_current_position, r.submited, iu.`banglaName` as iro_bangla_name, iu.`englishName` as iro_name, cu.`banglaName` as cro_bangla_name, cu.`englishName` as cro_name
        FROM `Reporters` as r 
        JOIN `Users` as iu
        ON r.iro = iu.`idNo` 
        JOIN `Users` as cu
        ON r.cro = cu.`idNo`
        where r.user_id = "111111" LIMIT 0,100

        */
        // try{
        //     const data = await Reporter.findAll({where: {user_id: user_id}, attributes: { exclude: ['createdAt','updatedAt']}})
        //     if(data){
        //         return data;
        //     }
        // }catch (e){
        //     return e;
        // }
    }

    async update(id, data){
        try{
            const db_res = await Reporter.update({
                user_id: data.user_id,
                iro: data.iro,
                cro: data.cro,
                start_date: data.start_date,
                end_date: data.end_date,
                gread: data.gread,
                designation: data.designation,
                joining_date_current_position: data.joining_date_current_position
                },
                {
                    where:{id:id}
                }
            );
            if(db_res == 1){
                return "Reporter update successfull.";
            }
        }catch (e){
            return e;
        }
    }
}

module.exports = new ReporterRepository();