const express = require('express')
const controller = require('../controllers/RoleController')

const router = express.Router();

router.get('/', async (req, res)=>{
    await controller.getAll(req, res); 
})

router.get('/permission', async (req, res)=> {
    await controller.getAllPermission(req, res);
})

router.post('/permissionAssign/:role', async (req, res)=> {
    await controller.assignPermission(req, res);
})

router.post('/permissionRemove/:role', async (req, res)=> {
    await controller.removePermission(req, res);
})

//'role_assign'
router.post('/assignToUser/:user', async (req, res)=>{
    await controller.assignRole(req,res)
})

router.post('/removeFromUser/:user', async (req, res)=>{
    await controller.removeRole(req,res)
})

module.exports = router;