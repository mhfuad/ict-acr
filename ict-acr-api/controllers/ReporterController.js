const repository = require('../repositories/reporterRepository')
class ReporterController{

    async create(req, res){
        try {
            var response = await repository.create(req.body);
            res.json(response);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async getIRO(req, res){
        try {
            var response = await repository.getIRO(req.params.user);
            console.info(response)
            res.json(response);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async getReporter(req, res){
        try {
            var response = await repository.getIRO(req.params.user_id);
            console.info(response)
            res.json(response);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async getCRO(req, res){
        try {
            var response = await repository.getCRO(req.params.user);
            console.info(response)
            res.json(response);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async getAllReporters(req, res){
        try{
            var response = await repository.all();
            res.json(response);
        } catch (err){
            res.status(500).json({error: err})
        }
    }

    async deleteReporter(req, res){
        try{
            var response = await repository.delete(req.params.id);
            res.json(response);
        } catch (err){
            res.status(500).json({error: err})
        }
    }

    async updateReporter(req, res) {
        try {
            const data = await repository.update(req.params.id, req.body);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getReporterByUser(req, res){
        try{
            var response = await repository.getReporterByUser(req.params.user_id);
            res.json(response);
        } catch (err){
            res.status(500).json({error: err})
        }
    }
}

module.exports = new ReporterController();