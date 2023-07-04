const express = require('express')
const controller = require('../controllers/eleventhFormController')

const router = express.Router();

router.get('/', async (req, res) =>  {
    await controller.getForms(req, res);
});
router.get('/:id', async (req, res, id) => {
    await controller.findOne(req, res, id)
});
router.post('/', async (req, res) => {
    await controller.createFrom(req, res)
})
router.put('/:id', async (req, res) => {
    await controller.updateForm(req, res)
});
router.delete('/:id', async (req, res) => {
    await controller.deleteForm(req, res)
});

module.exports = router;