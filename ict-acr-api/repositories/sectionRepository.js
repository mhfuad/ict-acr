
const { Section } = require('../models');

class SectionRepository{

    async getAllSections(){
        return await Section.findAll({attributes: { exclude: ['createdAt','updatedAt','branchId'] }});
    }

    async getSectionById(id) {
        return await Section.findByPk(id);
    }

    async createSection(req) {
        try{
            return await Section.create({
                name: req.name,
                name_bn: req.name_bn,
                code: req.code,
                branchId: req.branchId,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }catch (error){
            console.log(error)
        }
    }

    updateSection(id, section) {

        return Section.update({
            name: section.name,
            code: section.code,
            name_bn: section.name_bn,
            branchId: section.branchId,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            where: {
                id: id
            }
        })
    }

    async deleteSection(id) {
        await Section.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new SectionRepository();