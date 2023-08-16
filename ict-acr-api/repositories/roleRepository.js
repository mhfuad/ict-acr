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

    async allPermission(){
        return await Permission.findAll({attributes:{ exclude: ['createdAt', 'updatedAt']}});
    }

    async assignPermission(role, permissions){
        const ro = await Role.findByPk(role)
        permissions.forEach(async (p)=>{
            const per = await Permission.findByPk(p)
            await ro.addPermission(per)
        })
        return "Permission assign success";
    }

    async removePermission(role, permissions){
        const ro = await Role.findByPk(role)
        permissions.forEach(async (p)=>{
            const per = await Permission.findByPk(p)
            await ro.removePermission(per)
        })
        return "Permission remove success";
    }
}

module.exports = new RoleRepository();