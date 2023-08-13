const express = require('express')
const controller = require('../controllers/ZoneController')

const router = express.Router();
//'zone_all'
router.get('/', async (req, res)=>{
    await controller.getZones(req,res)
})
//'zone_create'
router.post('/', async (req, res)=>{
    await controller.createZone(req,res)
})
//'zone_ById'
router.get('/:id', async (req, res)=>{
    await controller.getZoneById(req,res)
})
//'zone_update'
router.put('/:id', async (req, res)=>{
    await controller.updateZone(req,res)
})
//'zone_delete'
router.delete('/:id', async (req, res)=>{
    await controller.deleteZone(req,res)
})


module.exports = router;