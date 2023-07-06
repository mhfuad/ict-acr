const express = require('express')
const userIroCroController = require('../controllers/UserIroCroController')

const router = express.Router();

router.get('/', async (req, res) =>  {
    await userIroCroController.getUserIroCro(req, res);
});
router.get('/:id', async (req, res, id) => {
    await userIroCroController.getUserIroCroById(req, res, id)
});
router.post('/', async (req, res) => {
    await userIroCroController.createUserIroCro(req, res)
})
router.put('/:id', async (req, res) => {
    await userIroCroController.updateUserIroCro(req, res)
});
router.delete('/:id', async (req, res) => {
    await userIroCroController.deleteUserIroCro(req, res)
});

module.exports = router;