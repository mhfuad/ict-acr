const repository = require('../repositories/eleventhFormRepository')

class FormController{
    async getForms(req, res) {
        try {
            const data = await repository.allForms(req);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findOne(req, res) {
        try {
            const user = await repository.getOne(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async createFrom(req, res) {
        try {
            const data = await repository.create(req.body);
            res.status(201).json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateForm(req, res) {
        try {
            const data = await repository.update(req.params.id, req.body);
            if (!data) {
                return res.status(404).json({ error: 'Form not found' });
            }
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteForm(req, res) {
        try {
            await repository.delete(req.params.id);
            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async assignRole(req, res){
        try {
            res.json("ok");
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }
}

module.exports = new FormController();