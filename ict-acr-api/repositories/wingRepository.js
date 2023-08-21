
const { Wing } = require('../models');

class SectionRepository{

    async getAll(){
        return await Wing.findAll({attributes: { exclude: ['createdAt','updatedAt'] }});
    }

    async getById(id) {
        return await Wing.findByPk(id);
    }

    async create(req) {
        try{
            return await Wing.create({
                name: req.name,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }catch (error){
            console.log(error)
        }
    }

    async update(id, section) {

        return Wing.update({
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
        await Wing.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new SectionRepository();