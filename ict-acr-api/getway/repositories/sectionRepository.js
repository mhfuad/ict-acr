
const { Section } = require('../models');

class SectionRepository{

    async getAllSections(){
        return await Section.findAll();
    }

    async getSectionById(id) {
        return await Section.findByPk(id);
    }

    async createSection(req) {
        try{
            return await Section.create({
                name: req.name,
                code: req.code,
                department_id: req.department_id,
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
            department_id: section.department_id,
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