const express = require('express')
const controller = require('../controllers/DepartmentController')

const router = express.Router();

router.get('/', async (req, res)=>{
    await controller.getDepartments(req,res)
})
router.post('/', async (req, res)=>{
    await controller.createDepartment(req,res)
})
router.get('/:id', async (req, res)=>{
    await controller.getDepartmentById(req,res)
})

router.put('/:id', async (req, res)=>{
    await controller.updateDepartment(req,res)
})
router.delete('/:id', async (req, res)=>{
    await controller.deleteDepartment(req,res)
})


module.exports = router;