const express = require('express')
const controller = require('../controllers/NotificationController')

const router = express.Router();

//'log_all'
router.get('/', async (req, res) => {
    await controller.index(req, res)
})
router.get('/get_count/:user_id', async (req, res) => {
    await controller.getCount(req, res)
})
//'log_user'
router.get('/:user_id', async (req, res) => {
    await controller.getByUser(req, res)
})
//'log_create'
router.post('/', async (req, res) => {
    await controller.create(req, res)
})
//'log_update'
router.put('/:id',async (req, res) => {
    await controller.update(req, res)
})
//'log_delete'
router.delete('/:id',async (req, res) => {
    await controller.delete(req, res)
})


module.exports = router;