const { User, Role, Permission } = require('../models');
const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const jwt = require('jsonwebtoken');
const config = require('../config/index')
const axios = require('axios');

class AuthRepository{

    async login(req){
        const user = await User.findOne({where: {idNo: req.user_id}})
        if(!user){
            return "User not found";
        }
        const passwordMatch = await bcrypt.compare(req.password, user.password);
        if(!passwordMatch){
            return "Invalid credentials"
        }
        
        const otp = Math.floor(Math.random() * 9999) + 1;

        await User.update({otp: otp},{
            where:{
                id: user.id
            }
        })
        return await this.sendSMS(user.personalNumber, otp);
    }

    async sendSMS(user_number, otp){
        const url = config.SMS_URL;
        const values = config.VALUE;
        const sender_id = config.SENDER_ID;
        
        var data = `{\n    "sender_id": "${sender_id}","receiver": "${user_number}",\n    "message": "Your varification code is ${otp}.",\n    "remove_duplicate": true\n}`;

        var conf = {
            method: 'post',
            maxBodyLength: Infinity,
            url: url,
            headers: { 'Authorization': values,'Content-Type': 'application/json'},
            data : data
        };

        const sms_res = await axios(conf)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                return response.data
            })
            .catch(function (error) {
                console.log(error);
                return error
            });
        if(sms_res.code == 200){
            return "OTP send to your number";
        }else{
            return "Something is wrong.";
        }
    }

    async otpMatching(req){
        const user = await User.findOne({where: {idNo: req.user_id, otp: req.otp}})
        
        if(!user){
            return "User not found";
        }
        User.update({otp: null},{
            where:{
                id: user.id
            }
        })
        const userForToken = {id: user.id}
        const secretKey = config.APP_SECRET;

        return jwt.sign({userForToken}, secretKey)
    }
}

module.exports = new AuthRepository();