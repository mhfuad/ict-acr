const express = require('express')
const controller = require('../controllers/eleventhAssessmentController')

const router = express.Router();
//'assessment_create'
router.post('/create/:form_id', async (req, res) => {
    await controller.create(req, res)
})
//'assessment_byForm'
router.get('/:form_id', async (req, res) => {
    await controller.getQuestionsOfForm(req, res)
})
//'assessment_createForm'
router.post('/createQuestion', async (req, res) => {
    await controller.createQuestion(req, res)
})

module.exports = router;