const express = require('express')
const controller = require('../controllers/AuthController')

const router = express.Router();

router.post('/login', async (req, res)=>{
    await controller.authenticateUser(req,res)
})

router.post('/register', async (req, res)=>{
    await controller.authenticateUser(req,res)
})

module.exports = router;