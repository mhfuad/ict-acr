const repository = require('../repositories/reporterRepository')
const validation = require('../validation/reporterValidation')
class ReporterController{

    async create(req, res){
        const { error, value } = validation.validate(req.body, {abortEarly: false})

        if(error){
            return res.status(400).json({ error: error.details });
        }
        try {
            var response = await repository.create(req.body);
            
            if(response == 'not_available'){
                res.status(403).json({error:"This user already has an ACR between this dates"});
            }else{
                res.json(response);
            }
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

    async getAllWithPagination(req, res){
        try{
            var response = await repository.allWithPagination(req);
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