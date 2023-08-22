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

    async getFormsWithPage(req, res) {
        try {
            const data = await repository.allFormsPaginat(req);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findOne(req, res) {
        try {
            const user = await repository.getOne(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'Form not found' });
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
            res.json({ message: 'Form deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findForCro(req, res){
        try {
            const data = await repository.findForCro(req);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findForIro(req, res){
        try {
            const data = await repository.findForIro(req);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findForDone(req, res){
        try {
            const data = await repository.doneForm(req);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new FormController();