const repository = require('../repositories/departmentRepository')
const validation = require('../validation/departmentValidation') 

class DepartmentController{

    async getDepartments(req, res) {
        try {
            const departments = await repository.getAllDepartments(req, res);
            res.json(departments);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getDepartmentById(req, res) {
        try {
            const department = await repository.getDepartmentById(req.params.id);
            if (!department) {
                return res.status(404).json({ error: 'Department not found' });
            }
            res.json(department);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async createDepartment(req, res){
        const { error, value } = validation.validate(req.body)
        if(error){
            return res.status(400).json({ error: error.details });
        }
        try {
            var test = await repository.createDepartment(req.body)
            res.json(test);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async updateDepartment(req, res) {
        try {
            const department = await repository.updateDepartment(req.params.id, req.body);
            if (!department) {
                return res.status(404).json({ error: 'department not found' });
            }
            res.json("Update successful");
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteDepartment(req, res) {
        try {
            var status = await repository.deleteDepartment(req.params.id);
            res.json({ message: status });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new DepartmentController();