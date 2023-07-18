
const { Department } = require('../models');

class DepartmentRepository{

    async getAllDepartments(){
        return await Department.findAll();
    }

    async getDepartmentById(id) {
        return await Department.findByPk(id);
    }

    async createDepartment(req) {
        try{
            return await Department.create({
                name: req.name,
                code: req.code,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }catch (error){
            console.log(error)
        }
    }

    updateDepartment(id, department) {

        return Department.update({
            name: department.name,
            code: department.code,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            where: {
                id: id
            }
        })
    }

    async deleteDepartment(id) {
        await Department.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new DepartmentRepository();