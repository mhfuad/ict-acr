const { User, Role, Permission, Access_log } = require('../models');
const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const jwt = require('jsonwebtoken');
const config = require('../config/index')
const axios = require('axios');
const nodemailer = require("nodemailer")

class AuthRepository{

    async login(req){
        
        const user = await User.findOne({where: {idNo: req.user_id}})
        if(user === null){
            return "not_found";
        }
        //password match skipped
        // const passwordMatch = await bcrypt.compare(req.password, user.password);
        // if(!passwordMatch){
        //     return "not_match";
        // }
        
        const otp = Math.floor(1000 + Math.random() * 9000);

        await User.update({otp: otp},{
            where:{
                id: user.id
            }
        })
        const send_sms = await this.sendSMS(user.personalNumber, "Your varification code is "+otp);
        //return `OTP send to 01*****${user_number.substring(user_number.length - 4)} number`;
        if(req.email){
            this.sendMail(user.personalMail, "Your varification code is"+otp);
            return `OTP send to 01*****${user.personalNumber.substring(user.personalNumber.length - 4)} number and ${user.personalMail} email`;
        }
        return `OTP send to 01*****${user.personalNumber.substring(user.personalNumber.length - 4)} number`;
    }

    async sendSMS(user_number, message){
        const url = config.SMS_URL;
        const values = config.VALUE;
        const sender_id = config.SENDER_ID;
        
        var data = `{\n    "sender_id": "${sender_id}","receiver": "${user_number}",\n    "message": "${message}",\n    "remove_duplicate": true\n}`;

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
            return true;
        }else{
            return "Something is wrong.";
        }
    }

    async otpMatching(req){
        const user = await User.findOne({where: {idNo: req.user_id, otp: req.otp}})
        try{
            await Access_log.create({ip: req.headers['x-forwarded-for'], user_id:req.user_id,date: new Date(Date.now() + 21600000)});
        }catch (e){
            await Access_log.create({ip: " ", user_id:req.user_id,date: new Date(Date.now() + 21600000)});
        }
        
        if(!user){
            return "not_found";
        }
        await User.update({otp: null},{
            where:{
                id: user.id
            }
        })
        const userForToken = {id: user.id}
        const secretKey = config.APP_SECRET;

        return jwt.sign({userForToken}, secretKey)
    }

    sendMail(address, message){
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: config.EMAIL_USER,
                pass: config.EMAIL_PASSWORD
            }
        })

        const mailerOption = {
            from: "fuad.inflack@gmail.com",
            to: address,
            subject: "Varification",
            text: `${message}`
        }

        transporter.sendMail(mailerOption, (error, info)=> {
            if(error){
                console.log("Email error :", error.message)
                return 0
            }else{
                //console.log("Email message :", info.response)
                return 1
            }
        })
    }
}

module.exports = new AuthRepository();