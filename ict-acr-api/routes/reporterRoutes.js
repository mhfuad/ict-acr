const express = require('express')
const controller = require('../controllers/ReporterController')

const router = express.Router();
//'reporter_create'
router.post('/', async (req, res)=>{
    await controller.create(req,res)
})
//'reporter_ByIRO'
router.get('/iro/:user', async (req, res)=>{
    await controller.getIRO(req,res)
})
//'reporter_ByCRO'
router.get('/cro/:user', async (req, res)=>{
    await controller.getCRO(req,res)
})
//'reporter_all'
router.get('/', async(req, res) => {
    await controller.getAllReporters(req, res);
})
router.get('/page/:page', async(req, res) => {
    await controller.getAllWithPagination(req, res);
})
//'reporter_ByUser'
router.get('/user/:user_id', async(req, res) => {
    await controller.getReporterByUser(req, res);
})
//'reporter_update'
router.put('/:id', async(req, res) => {
    await controller.updateReporter(req, res);
})
//'reporter_delete'
router.delete('/:id', async(req, res) => {
    await controller.deleteReporter(req, res);
})
module.exports = router;