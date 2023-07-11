const repository = require('../repositories/zoneRepository')
const userRepository = require("../repositories/userRepository");
class ZoneController{

    async getZones(req, res) {
        try {
            const zones = await repository.getAllZones(req, res);
            res.json(zones);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getZoneById(req, res) {
        try {
            const zone = await repository.getZoneById(req.params.id);
            if (!zone) {
                return res.status(404).json({ error: 'Zone not found' });
            }
            res.json(zone);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async createZone(req, res){
        try {
            var test = await repository.createZone(req.body)
            res.json(test);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async updateZone(req, res) {
        try {
            const zone = await repository.updateZone(req.params.id, req.body);
            if (!zone) {
                return res.status(404).json({ error: 'zone not found' });
            }
            res.json("Update successful");
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteZone(req, res) {
        try {
            var status = await repository.deleteZone(req.params.id);
            res.json({ message: status });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ZoneController();