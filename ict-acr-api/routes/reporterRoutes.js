const express = require('express')
const controller = require('../controllers/ReporterController')

const router = express.Router();

router.post('/', async (req, res)=>{
    await controller.create(req,res)
})

router.get('/iro/:user', async (req, res)=>{
    await controller.getIRO(req,res)
})

router.get('/cro/:user', async (req, res)=>{
    await controller.getCRO(req,res)
})

router.get('/', async(req, res) => {
    await controller.getAllReporters(req, res);
})

router.get('/user/:user_id', async(req, res) => {
    await controller.getReporterByUser(req, res);
})

router.put('/:id', async(req, res) => {
    await controller.updateReporter(req, res);
})

router.delete('/:id', async(req, res) => {
    await controller.deleteReporter(req, res);
})
module.exports = router;