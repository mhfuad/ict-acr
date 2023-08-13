const express = require('express')
const controller = require('../controllers/DesignationController')

const router = express.Router();
//'designation_all'
router.get('/', async (req, res)=>{
    await controller.getDesignations(req,res)
})
//'designation_create'
router.post('/', async (req, res)=>{
    await controller.createDesignation(req,res)
})
//'designation_get'
router.get('/:id', async (req, res)=>{
    await controller.getDesignationById(req,res)
})
//'designation_update'
router.put('/:id', async (req, res)=>{
    await controller.updateDesignation(req,res)
})
//'designation_delete'
router.delete('/:id', async (req, res)=>{
    await controller.deleteDesignation(req,res)
})


module.exports = router;