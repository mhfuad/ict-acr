const express = require('express')
const controller = require('../controllers/ZoneController')

const router = express.Router();

router.get('/', async (req, res)=>{
    await controller.getZones(req,res)
})
router.post('/', async (req, res)=>{
    await controller.createZone(req,res)
})
router.get('/:id', async (req, res)=>{
    await controller.getZoneById(req,res)
})

router.put('/:id', async (req, res)=>{
    await controller.updateZone(req,res)
})
router.delete('/:id', async (req, res)=>{
    await controller.deleteZone(req,res)
})


module.exports = router;