const { User, Role, Permission } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
class RoleRepository{

    async assignRole(user, roles){
        const us = await User.findByPk(user,{ include:{model: Role}});

        us.Roles.forEach( async (r) => {
            await us.removeRole(r.id)
        })

        roles.forEach ( async (r) => {
            await us.addRole(r)
        })

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

    async create(req){
        try{
            return await Role.create({name:req.body.name});
        }catch (error){
            console.log(error)
        }
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

    async delete(id){
        try{
            await Role.destroy({
                where: {
                    id: id
                },
            })
            return "Role delete success";
        }catch (error){
            console.log(error)
        }
    }

    async getRole(id){
        try{
            return await Role.findByPk(id,{
                where: {
                    id: id
                },
                attributes:{ exclude: ['createdAt','updatedAt']},
                include:{
                    model: Permission,
                    attributes:{ exclude: ['createdAt','updatedAt']},
                }
            })
        }catch (error){
            console.log(error)
        }
    }
}

module.exports = new RoleRepository();