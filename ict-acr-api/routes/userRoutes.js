const express = require('express')
const userController = require('../controllers/UserController')

const router = express.Router();
//'user_all'
router.get('/', async (req, res) =>  {
    await userController.users(req, res);
});
router.get('/search', async (req, res) =>  {
    await userController.searchUser(req, res);
});
router.get('/page/:page', async (req, res) =>  {
    await userController.getUsers(req, res);
});
//'user_ById'
router.get('/:id', async (req, res, id) => {
    await userController.getUserById(req, res, id)
});
//'user_create'
router.post('/', async (req, res) => {
    await userController.createUser(req, res)
})
//'user_update'
router.put('/:id', async (req, res) => {
    await userController.updateUser(req, res)
});
//'user_delete'
router.delete('/:id', async (req, res) => {
    await userController.deleteUser(req, res)
});
//'user_ImageUpload'
router.post("/upload_image/:user_id", async(req, res) => {
    await userController.upload_image(req, res);
})

module.exports = router;