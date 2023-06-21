const repository = require('../repository/assessmentRepository')

class AssessmentController{
    async getQuestionsOfForm(req, res) {
        try {
            const data = await repository.getFormsQuestions(req.params.formId);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async createQuestion(req, res) {
        try {
            const data = await repository.creatFormsQuestions(req.body);
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

module.exports = new AssessmentController();