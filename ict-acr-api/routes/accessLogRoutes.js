const express = require('express')
const controller = require('../controllers/AccessLogController')

const router = express.Router();

router.get('/', async (req, res) => {
    await controller.index(req, res)
})

router.get('/user/:user_id', async (req, res) => {
    await controller.getByUser(req, res)
})

router.post('/', async (req, res) => {
    await controller.create(req, res)
})

router.put('/:id',async (req, res) => {
    await controller.update(req, res)
})

router.delete('/:id',async (req, res) => {
    await controller.delete(req, res)
})


module.exports = router;