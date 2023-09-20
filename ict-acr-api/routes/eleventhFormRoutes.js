const express = require('express')
const controller = require('../controllers/eleventhFormController')

const router = express.Router();
//'form_all'
router.get('/', async (req, res) =>  {
    await controller.getForms(req, res);
});
router.get('/page/:page', async (req, res) =>  {
    await controller.getFormsWithPage(req, res);
});
//'form_forCRO'
router.get('/for_cro/:page', async(req, res) => {
    await controller.findForCro(req, res)
})
//'form_forIRO'
router.get('/for_iro/:page', async(req, res) => {
    await controller.findForIro(req, res)
})
router.get('/done/:page', async(req, res) => {
    await controller.findForDone(req, res)
})
//'form_get'
router.get('/:id', async (req, res, id) => {
    await controller.findOne(req, res, id)
});
//'form_create'
router.post('/', async (req, res) => {
    await controller.createFrom(req, res)
})
//'form_update'
router.put('/:id', async (req, res) => {
    await controller.updateForm(req, res)
});
router.put('/cro_to_iro/:id', async (req, res) => {
    await controller.cro_to_iro(req, res)
});
//'form_delete'
router.delete('/:id', async (req, res) => {
    await controller.deleteForm(req, res)
});


module.exports = router;