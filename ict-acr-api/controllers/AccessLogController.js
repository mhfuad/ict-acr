const repository = require('../repositories/accessLogRepository')

class AccessLogController{
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

    async allWithPagination(req, res){
        try{
            const data = await repository.allWithPagination(req);
            res.json(data)
        }catch(err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const data = await repository.update(req.params.id, req.body);
            if (!data) {
                return res.status(404).json({ error: 'Evaluation not found' });
            }
            if(data == 1){
                return res.status(201).json({ success: 'Evaluation update successfull.' });
            }else{
                return res.status(500).json({ error: 'Problem' });
            }
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

module.exports = new AccessLogController();