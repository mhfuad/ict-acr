const { Reporter, User } = require('../models');
const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const jwt = require('jsonwebtoken');
const config = require('../config/index')

class ReporterRepository{

    async assignReporter(req){
        try{
            const data = await Reporter.create({user_id: req.params.user, iro: req.body.iro, cro: req.body.cro, start_date: req.body.start_date, end_date: req.body.start_date})
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
}

module.exports = new ReporterRepository();