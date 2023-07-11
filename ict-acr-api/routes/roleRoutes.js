const express = require('express')
const controller = require('../controllers/RoleController')

const router = express.Router();

router.post('/assignToUser/:user/:role', async (req, res)=>{
    await controller.assignRole(req,res)
})

module.exports = router;