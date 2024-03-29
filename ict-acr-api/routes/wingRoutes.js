const express = require('express')
const controller = require('../controllers/WingController')

const router = express.Router();
router.get('/', async (req, res)=>{
    await controller.get(req,res)
})
router.post('/', async (req, res)=>{
    await controller.create(req,res)
})
router.get('/:id', async (req, res)=>{
    await controller.getById(req,res)
})
router.put('/:id', async (req, res)=>{
    await controller.update(req,res)
})
router.delete('/:id', async (req, res)=>{
    await controller.delete(req,res)
})

module.exports = router;