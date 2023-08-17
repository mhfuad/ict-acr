const express = require('express')
const controller = require('../controllers/WingController')

const router = express.Router();
//'department_all'
router.get('/', async (req, res)=>{
    await controller.getDepartments(req,res)
})
'department_create'
router.post('/', async (req, res)=>{
    await controller.createDepartment(req,res)
})
'department_get'
router.get('/:id', async (req, res)=>{
    await controller.getDepartmentById(req,res)
})
//'department_update'
router.put('/:id', async (req, res)=>{
    await controller.updateDepartment(req,res)
})
//'department_delete'
router.delete('/:id', async (req, res)=>{
    await controller.deleteDepartment(req,res)
})

module.exports = router;