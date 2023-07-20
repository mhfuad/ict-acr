const express = require('express')
const controller = require('../controllers/DesignationController')

const router = express.Router();

router.get('/', async (req, res)=>{
    await controller.getDesignations(req,res)
})
router.post('/', async (req, res)=>{
    await controller.createDesignation(req,res)
})
router.get('/:id', async (req, res)=>{
    await controller.getDesignationById(req,res)
})

router.put('/:id', async (req, res)=>{
    await controller.updateDesignation(req,res)
})
router.delete('/:id', async (req, res)=>{
    await controller.deleteDesignation(req,res)
})


module.exports = router;