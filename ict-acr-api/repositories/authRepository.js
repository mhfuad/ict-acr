const { User, Role, Permission, Access_log } = require('../models');
const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const jwt = require('jsonwebtoken');
const config = require('../config/index')
const axios = require('axios');
const nodemailer = require("nodemailer")
const moment = require('moment');

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

        await User.update(
            {otp: otp, updatedAt: new Date()},
            {
            where:{
                id: user.id
            }
        })

        
        if(req.sms && req.email){
            await this.sendSMS(user.personalNumber, "Your ICTD ACR System Login Verification Code "+otp);
            this.sendMail(user.personalMail, "Your ICTD ACR System Login Verification Code "+otp);
            return `OTP send to 01*****${user.personalNumber.substring(user.personalNumber.length - 4)} number and ${user.personalMail} email`;
        }
        if(req.sms){
            await this.sendSMS(user.personalNumber, "Your ICTD ACR System Login Verification Code "+otp);
            return `OTP send to 01*****${user.personalNumber.substring(user.personalNumber.length - 4)} number.`;
        }
        if(req.email){
            this.sendMail(user.personalMail, "Your ICTD ACR System Login Verification Code "+otp);
            return `OTP send to ${user.personalMail} email`;
        }
        if(!req.sms && !req.email){
            return `no`;
        }
        
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
        //find user and match token
        const user = await User.findOne({where: {idNo: req.body.user_id}})
        if(!user){
            return "not_found";
        }
        if(user.otp != req.body.otp){
            return "otp_not_match";
        }
        //check OTP time difference
        const timeDifference = moment.duration(moment(new Date()).diff(user.updatedAt));
        if(timeDifference.asMinutes() > 5){
            return "otp_expire";
        }
        //get user information
        const header = req.headers['user-agent'];
        let deviceName = ''

        switch(header){
            case header.includes('Dart'):
                deviceName = "ICT ACR App";
                break;
            case header.includes('(iPhone'):
                deviceName = "iPhone Web";
                break;
            case header.includes('(Android'):
                deviceName = "Android Web";
                break;
            case header.includes('(X11;'):
                deviceName = "Linux Web";
                break;
            default:
                deviceName =req.headers['user-agent']
        }
        //saving user information to access log
        try{
            await Access_log.create({ip: req.headers['x-forwarded-for'], user_id:req.user_id, date: new Date(Date.now() + 21600000), device: deviceName});
        }catch (e){
            console.log(e)
        }
        //update token field
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