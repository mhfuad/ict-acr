
const { Branch } = require('../models');

class BranchRepository{

    async getAll(){
        return await Branch.findAll({attributes: { exclude: ['createdAt','updatedAt'] }});
    }

    async getById(id) {
        return await Branch.findByPk(id);
    }

    async create(req) {
        try{
            return await Branch.create({
                wingId: req.wingId,
                name: req.name,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }catch (error){
            console.log(error)
        }
    }

    async update(id, section) {

        return Branch.update({
            name: section.name,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            where: {
                id: id
            }
        })
    }

    async delete(id) {
        await Branch.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new BranchRepository();