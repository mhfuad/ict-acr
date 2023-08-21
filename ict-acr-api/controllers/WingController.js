const repository = require('../repositories/wingRepository')
class SectionController{

    async get(req, res) {
        try {
            const sections = await repository.getAll(req, res);
            res.json(sections);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const section = await repository.getById(req.params.id);
            if (!section) {
                return res.status(404).json({ error: 'Section not found' });
            }
            res.json(section);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async create(req, res){
        try {
            var test = await repository.create(req.body)
            res.json(test);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async update(req, res) {
        try {
            const section = await repository.update(req.params.id, req.body);
            if (!section) {
                return res.status(404).json({ error: 'section not found' });
            }
            res.json("Update successful");
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            var status = await repository.delete(req.params.id);
            res.json({ message: status });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new SectionController();