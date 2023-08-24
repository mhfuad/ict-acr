const express = require('express')
const controller = require('../controllers/eleventhAssessmentController')

const router = express.Router();
//'assessment_create'
router.post('/create/:form_id', async (req, res) => {
    await controller.create(req, res)
})
router.put('/update/:form_id', async (req, res) => {
    await controller.update(req, res)
})

router.get('/all', async (req, res) => {
    await controller.getAll(req, res)
})

//'assessment_createForm'
router.post('/createQuestion', async (req, res) => {
    await controller.createQuestion(req, res)
})

//'assessment_byForm'
router.get('/:form_id', async (req, res) => {
    await controller.getQuestionsOfForm(req, res)
})

module.exports = router;