const express = require('express')
const controller = require('../controllers/SectionController')

const router = express.Router();

router.get('/', async (req, res)=>{
    await controller.getSections(req,res)
})
router.post('/', async (req, res)=>{
    await controller.createSection(req,res)
})
router.get('/:id', async (req, res)=>{
    await controller.getSectionById(req,res)
})

router.put('/:id', async (req, res)=>{
    await controller.updateSection(req,res)
})
router.delete('/:id', async (req, res)=>{
    await controller.deleteSection(req,res)
})


module.exports = router;