const express = require('express')
const userController = require('../controllers/UserController')

const router = express.Router();

router.get('/', async (req, res) =>  {
    await userController.getUsers(req, res);
});
router.get('/:id', async (req, res, id) => {
    await userController.getUserById(req, res, id)
});
router.post('/', async (req, res) => {
    await userController.createUser(req, res)
})
router.put('/:id', async (req, res) => {
    await userController.updateUser(req, res)
});
router.delete('/:id', async (req, res) => {
    await userController.deleteUser(req, res)
});
router.post("/upload_image/:user_id", async(req, res) => {
    await userController.upload_image(req, res);
})

module.exports = router;