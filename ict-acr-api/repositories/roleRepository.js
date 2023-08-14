const { User, Role, Permission } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
class RoleRepository{

    async assignRole(user, roles){
        const us = await User.findByPk(user,{ include:{model: Role}});
        roles.forEach(async (role) => {
            const r = await Role.findByPk(role)
            await us.addRole(r);
        });
        return "Role assign success";
        
    }

    async removeRole(user, roles){
        const us = await User.findByPk(user,{ include:{model: Role}});
        roles.forEach(async (role) => {
            const r = await Role.findByPk(role)
            await us.removeRole(r);
        });
        return "Role remove success";
        
    }

    async allRole(){
        return await Role.findAll({ attributes:{ exclude: ['createdAt','updatedAt']}});
    }
}

module.exports = new RoleRepository();