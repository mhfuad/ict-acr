const repository = require('../repositories/notificationRepository')

class NotificationController{
    async create(req, res) {
        try {
            const data = await repository.create(req.body)
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    
    async getByUser(req, res) {
        try {
            const data = await repository.get_by_user(req.params.user_id);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async index(req, res) {
        try {
            const data = await repository.all();
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const data = await repository.update(req.params.id, req.body);
            return res.status(500).json(data);
            
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await repository.delete(req.params.id);
            res.json({ message: 'Evaluation delete successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new NotificationController();