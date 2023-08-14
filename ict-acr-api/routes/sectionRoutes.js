const express = require('express')
const controller = require('../controllers/SectionController')
const { resolveUserRoles } = require('../config/userAllRole')

const router = express.Router();

const hasPermission = (action) => {
    return async (req, res, next) => {
        const userRole = await resolveUserRoles(req.body.userId)
        console.log(userRole)
        next();
    };
};

//'section_all'
router.get('/',  async (req, res)=>{
    res.json(await resolveUserRoles(req.body.userId))
    //await controller.getSections(req,res)
})

//'section_create'
router.post('/', async (req, res)=>{
    await controller.createSection(req,res)
})
//'section_ById'
router.get('/:id', async (req, res)=>{
    await controller.getSectionById(req,res)
})
//'section_update'
router.put('/:id', async (req, res)=>{
    await controller.updateSection(req,res)
})
//'section_delete'
router.delete('/:id', async (req, res)=>{
    await controller.deleteSection(req,res)
})


module.exports = router;