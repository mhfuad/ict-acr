const { User, Role, Permission } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
class RoleRepository{

    async assignRole(user, roleId){
        //return user+role;
        var role = await sequelize.query('SELECT * FROM `user_role` WHERE `UserId` = $user AND `RoleId` = $role',
            {
                bind: {user : user, role: roleId},
                type: QueryTypes.SELECT
            });

        if(role.length != 0){
            return "Role already assigned";
        }
        const createdAt = new Date();
        const updatedAt = new Date();
        try{
            await  sequelize.query('INSERT INTO `user_role` (UserId, RoleId, createdAt, updatedAt) VALUES (:user, :roleId, :createdAt, :updatedAt)', {
                type: sequelize.QueryTypes.INSERT,
                replacements: { user, roleId, createdAt, updatedAt }
            })
            return "Role assign success";
        }catch (err){
            console.log(err)
        }
    }
}

module.exports = new RoleRepository();