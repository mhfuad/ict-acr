const repository = require('../repositories/designationRepository')
class DesignationController{

    async getDesignations(req, res) {
        try {
            const designations = await repository.getAllDesignations(req, res);
            res.json(designations);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getDesignationById(req, res) {
        try {
            const designation = await repository.getDesignationById(req.params.id);
            if (!designation) {
                return res.status(404).json({ error: 'Designation not found' });
            }
            res.json(designation);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async createDesignation(req, res){
        try {
            var test = await repository.createDesignation(req.body)
            res.json(test);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async updateDesignation(req, res) {
        try {
            const designation = await repository.updateDesignation(req.params.id, req.body);
            if (!designation) {
                return res.status(404).json({ error: 'designation not found' });
            }
            res.json("Update successful");
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteDesignation(req, res) {
        try {
            var status = await repository.deleteDesignation(req.params.id);
            if(!status){
                return res.status(404).json({ error: 'Designation not found' });
            } else {
                res.status(200).json({ message: 'Successfully deleted!' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new DesignationController();