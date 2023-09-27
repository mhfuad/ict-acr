const { User, Role, Permission } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models')
class RoleRepository{

    async assignRole(user, roles){
        
        await this.removeRole(user);

        if(Object.keys(roles).length != 0){
            await this.assign(user, roles);
        }
        return "Role assign success";
    }
    async assign(us, roles){
        const user = await User.findByPk(us,{ include:{model: Role}});
        roles.forEach ( async (r) => {
            await user.addRole(r)
        })
    }

    async removeRole(user){
        const us = await User.findByPk(user,{ include:{model: Role}});
        const previous_roles = us.Roles.map(obj => obj.id);
        if(Object.keys(previous_roles).length != 0){
            console.log(typeof previous_roles)
            previous_roles.forEach(async (role) => {
                const r = await Role.findByPk(role)
                await us.removeRole(r);
            });
        }
        return "Role remove success";
    }

    async allRole(){
        return await Role.findAll({ 
            attributes:{ exclude: ['createdAt','updatedAt']},
            order: [['id', 'ASC']]
        });
    }

    async create(req){
        try{
            return await Role.create({name:req.body.name});
        }catch (error){
            console.log(error)
        }
    }

    async allPermission(req){
        try{
            const result = await Permission.findAll({
                attributes:{ exclude: ['createdAt', 'updatedAt']},
                order: [['id', 'ASC']]
            });
            return result;
        }catch (error) {
            console.error('Error fetching paginated permissions:', error);
            return 500;
        }
    }

    async allPermissionWithPagination(req){
        const PAGE_SIZE = 20;
        const page = parseInt(req.params.page, 10);

        const offset = (page - 1) * PAGE_SIZE;

        try{
            const permissions = await Permission.findAll({
                attributes:{ exclude: ['createdAt', 'updatedAt']},
                limit: PAGE_SIZE,
                offset: offset,
                order: [['id','ASC']]
            });
            const totalCount = await Permission.count();
            const totalpages = Math.ceil(totalCount / PAGE_SIZE);
            const result = {
                page: page,
                totalpages: totalpages,
                permissions: permissions
            }
            return result;
        }catch (error) {
            console.error('Error fetching paginated permissions:', error);
            return 500;
        }
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
                include:[
                    {
                        model: User,
                        attributes:{ exclude: ['createdAt','updatedAt','password','otp','role']},
                    },
                    {
                        model: Permission,
                        attributes:{ exclude: ['createdAt','updatedAt']},
                    }
                ]
            })
        }catch (error){
            console.log(error)
        }
    }

    async getRoleWithUser(id){
        try{
            return await Role.findByPk(id,{
                where: {
                    id: id
                },
                attributes:{ exclude: ['createdAt','updatedAt']},
                include:{
                    model: User,
                    attributes:{ exclude: ['createdAt','updatedAt','password','otp','role']},
                }
            })
        }catch (error){
            console.log(error)
        }
    }
}

module.exports = new RoleRepository();