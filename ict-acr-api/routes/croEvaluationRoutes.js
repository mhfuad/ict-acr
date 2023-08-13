const express = require('express')
const controller = require('../controllers/CroEvaluationController')

const router = express.Router();
//'cro_eva_list'
router.get('/', async (req, res) => {
    await controller.index(req, res)
})
'cro_eva_byForm'
router.get('/:form_id', async (req, res) => {
    await controller.get(req, res)
})
//'cro_eva_create'
router.post('/:form_id', async (req, res) => {
    await controller.create(req, res)
})
'cro_eva_update'
router.put('/:id',async (req, res) => {
    await controller.update(req, res)
})
//'cro_eva_delete'
router.delete('/:id',async (req, res) => {
    await controller.delete(req, res)
})


module.exports = router;