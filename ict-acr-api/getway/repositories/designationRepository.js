
const { Designation } = require('../models');

class DesignationRepository{

    async getAllDesignations(){
        return await Designation.findAll();
    }

    async getDesignationById(id) {
        return await Designation.findByPk(id);
    }

    async createDesignation(req) {
        try{
            return await Designation.create({
                name: req.name,
                name_bn: req.name_bn,
                code: req.code,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }catch (error){
            console.log(error)
        }
    }

    updateDesignation(id, designation) {

        return Designation.update({
            name: designation.name,
            name_bn: designation.name_bn,
            code: designation.code,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            where: {
                id: id
            }
        })
    }

    async deleteDesignation(id) {
        await Designation.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new DesignationRepository();