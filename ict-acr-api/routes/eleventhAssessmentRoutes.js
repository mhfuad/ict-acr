const express = require('express')
const controller = require('../controllers/eleventhAssessmentController')

const router = express.Router();

router.post('/create/:form_id', async (req, res) => {
    await controller.create(req, res)
})

router.get('/:form_id', async (req, res) => {
    await controller.getQuestionsOfForm(req, res)
})
router.post('/createQuestion', async (req, res) => {
    await controller.createQuestion(req, res)
})

module.exports = router;