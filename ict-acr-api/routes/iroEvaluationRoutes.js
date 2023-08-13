const express = require('express')
const controller = require('../controllers/IroEvaluationController')

const router = express.Router();
//'iro_evaAll'
router.get('/', async (req, res) => {
    await controller.index(req, res)
})
//'iro_evaByForm'
router.get('/:form_id', async (req, res) => {
    await controller.get(req, res)
})
//'iro_evaCreate'
router.post('/:form_id', async (req, res) => {
    await controller.create(req, res)
})
//'iro_evaUpdate'
router.put('/:form_id',async (req, res) => {
    await controller.update(req, res)
})
//'iro_evaDelete'
router.delete('/:id',async (req, res) => {
    await controller.delete(req, res)
})


module.exports = router;