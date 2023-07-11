const express = require('express')
const controller = require('../controllers/ReporterController')

const router = express.Router();

router.post('/assign/:user', async (req, res)=>{
    await controller.assignReporter(req,res)
})

router.get('/iro/:user', async (req, res)=>{
    await controller.getIRO(req,res)
})

router.get('/cro/:user', async (req, res)=>{
    await controller.getCRO(req,res)
})

module.exports = router;