const repository = require('../repositories/reporterRepository')
class ReporterController{

    async assignReporter(req, res){
        try {
            var response = await repository.assignReporter(req);
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

    async getCRO(req, res){
        try {
            var response = await repository.getCRO(req.params.user);
            console.info(response)
            res.json(response);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }
}

module.exports = new ReporterController();