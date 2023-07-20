const repository = require('../repositories/sectionRepository')
class SectionController{

    async getSections(req, res) {
        try {
            const sections = await repository.getAllSections(req, res);
            res.json(sections);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getSectionById(req, res) {
        try {
            const section = await repository.getSectionById(req.params.id);
            if (!section) {
                return res.status(404).json({ error: 'Section not found' });
            }
            res.json(section);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async createSection(req, res){
        try {
            var test = await repository.createSection(req.body)
            res.json(test);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async updateSection(req, res) {
        try {
            const section = await repository.updateSection(req.params.id, req.body);
            if (!section) {
                return res.status(404).json({ error: 'section not found' });
            }
            res.json("Update successful");
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteSection(req, res) {
        try {
            var status = await repository.deleteSection(req.params.id);
            res.json({ message: status });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new SectionController();