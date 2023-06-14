
const { Zone } = require('../models');

class ZoneRepository{

    async getAllZones(){
        return await Zone.findAll();
    }

    async getZoneById(id) {
        return await Zone.findByPk(id);
    }

    async createZone(req) {
        try{
            return await Zone.create({
                name: req.name,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }catch (error){
            console.log(error)
        }
    }

    updateZone(id, zone) {

        return Zone.update({
            name: zone.name,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            where: {
                id: id
            }
        })
    }

    async deleteZone(id) {
        await Zone.destroy({
            where: {
                id: id
            }
        })
    }

}

module.exports = new ZoneRepository();