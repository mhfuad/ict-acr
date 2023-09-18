const express = require('express')
const controller = require('../controllers/AccessLogController')
const { resolveUserRoles } = require('../config/userAllRole')

const router = express.Router();

const hasPermission = (action) => {
    return async (req, res, next) => {
        const userRole = await resolveUserRoles(req.body.userId)
        
        const isAdminPresent = userRole.Roles.some((roleObj) => roleObj.name === action);
        if (isAdminPresent) {
            next();
        } else {
            res.status(403).send("Forbidden").end();
        }
    };
};

//'log_all'
router.get('/', hasPermission('access_log'), async (req, res) => {
    await controller.index(req, res)
})
router.get('/page/:page',hasPermission('access_log'), async (req, res) =>{
    await controller.allWithPagination(req, res)
})
//'log_user'
router.get('/user/:user_id',hasPermission('access_log'), async (req, res) => {
    await controller.getByUser(req, res)
})
//'log_create'
router.post('/',hasPermission('access_log'), async (req, res) => {
    await controller.create(req, res)
})
//'log_update'
router.put('/:id',hasPermission('access_log'), async (req, res) => {
    await controller.update(req, res)
})
//'log_delete'
router.delete('/:id',hasPermission('access_log'), async (req, res) => {
    await controller.delete(req, res)
})


module.exports = router;