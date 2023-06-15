const { User, Role, Permission } = require('../models');
const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
const jwt = require('jsonwebtoken');
const config = require('../config/index')

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
        const secretKey = config.APP_SECRET;
        const payload = {userId: user.idNo, username: user.englishName}
        const options = {
            expiresIn: '1h'
        }
        return jwt.sign(payload, secretKey, options)

    }
}

module.exports = new AuthRepository();