const { Reporter, User } = require('../models');
const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const jwt = require('jsonwebtoken');
const config = require('../config/index')
const { Op } = require('sequelize');

class ReporterRepository{

    async create(body){
        
        const check = await Reporter.count({
            where: {
                user_id: body.user_id,
                [Op.or]: [
                    {
                        start_date: {
                            [Op.between]: [body.start_date, body.end_date]
                        }
                    },
                    {
                        end_date: {
                            [Op.between]: [body.start_date, body.end_date]
                        }
                    }
                ]
            }
        });
        if(check){
            return `not_available`;
        }else{
            try{
                body.submited = false;
                const data = await Reporter.create(body);
                return data;
            }catch (e){
                return e;
            }
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

    async getById(id){
        try{
            // const data = await Reporter.findOne({where: {id: id}, attributes: { exclude: ['createdAt','updatedAt'] }})
            // return data;
            try {
                const results = await sequelize.query(`SELECT 
                    r.id,
                    r.user_id,
                    r.iro, 
                    r.cro, 
                    r.start_date, 
                    r.end_date, 
                    r.gread, 
                    r.designation, 
                    r.joining_date_current_position, 
                    r.submited, 
                    iu.banglaName as iro_bangla_name, 
                    iu.englishName as iro_name, 
                    cu.banglaName as cro_bangla_name, 
                    cu.englishName as cro_name

                    FROM 
                        Reporters as r 
                    JOIN Users as iu
                        ON r.iro = iu.idNo
                    JOIN Users as cu
                        ON r.cro = cu.idNo
                    where r.id = :id`,{
                        replacements: {id:id},
                        type: sequelize.QueryTypes.SELECT
                    }
                )
                return results
            } catch (error) {
                console.error('Error:', error.message);
                return error.message
            }

        }catch (e){
            return e;
        }
    }

    async allWithPagination(req){
        const PAGE_SIZE = 10;
        const page = parseInt(req.params.page, 10);
        const offset = (page - 1) * PAGE_SIZE;
        try{
            const reporters = await sequelize.query(`SELECT 
            re.*,
            us.banglaName as user_name,
            us.englishName as user_en_name,
            iro.banglaName as iro_name,
            iro.englishName as iro_en_name,
            cro.banglaName as cro_name,
            cro.englishName as cro_en_name
                    FROM Reporters as re
                    JOIN Users as us
                        on re.user_id = us.idNo
                    JOIN Users as iro
                        on re.iro = iro.idNo
                    JOIN Users as cro
                        on re.cro = cro.idNo
                    LIMIT :limit
                    OFFSET :offset`,{
                        replacements: {limit:PAGE_SIZE, offset: offset},
                        type: sequelize.QueryTypes.SELECT,
                        model: Reporter
                    }
            )
            const totalCount = await Reporter.count();
            const totalpages = Math.ceil(totalCount / PAGE_SIZE);
            const results= {
                page: page,
                totalpages: totalpages,
                reporters: reporters,
            }
            return results;
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
            r.id, r.iro, r.cro, r.start_date, r.end_date, r.gread, r.designation, r.joining_date_current_position, r.submited, iu.banglaName as iro_bangla_name, iu.englishName as iro_name, cu.banglaName as cro_bangla_name, cu.englishName as cro_name
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