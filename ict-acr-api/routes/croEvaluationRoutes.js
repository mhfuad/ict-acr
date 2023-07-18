const express = require('express')
const controller = require('../controllers/CroEvaluationController')

const router = express.Router();

router.get('/', async (req, res) => {
    await controller.index(req, res)
})

router.get('/:form_id', async (req, res) => {
    await controller.get(req, res)
})

router.post('/:form_id', async (req, res) => {
    await controller.create(req, res)
})

router.put('/:id',async (req, res) => {
    await controller.update(req, res)
})

router.delete('/:id',async (req, res) => {
    await controller.delete(req, res)
})


module.exports = router;