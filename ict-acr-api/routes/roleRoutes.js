const express = require('express')
const controller = require('../controllers/RoleController')

const router = express.Router();
//'role_assign'
router.post('/assignToUser/:user', async (req, res)=>{
    await controller.assignRole(req,res)
})

router.post('/removeFromUser/:user', async (req, res)=>{
    await controller.removeRole(req,res)
})

module.exports = router;