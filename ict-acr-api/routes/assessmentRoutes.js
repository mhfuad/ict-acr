const express = require('express')
const controller = require('../controllers/AssessmentController')

const router = express.Router();

router.post('/create', async (req, res) => {
    await controller.create(req, res)
})

router.get('/:formId', async (req, res) => {
    await controller.getQuestionsOfForm(req, res)
})
router.post('/createQuestion', async (req, res) => {
    await controller.createQuestion(req, res)
})

module.exports = router;