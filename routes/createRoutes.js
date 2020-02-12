const { Router } = require('express')
const router = Router()
const uploadCloud = require('../config/cloudinary')
const {
  createCourseView,
  createCoursePost,
  createQuestionView,
  createQuestionPost
} = require('../controllers/createControllers')

router
  .get('/course', createCourseView)
  .post('/course', uploadCloud.single('portrait'), createCoursePost)
  .get('/course/:id', createQuestionView)
  .post('/course/:id', uploadCloud.single('image'), createQuestionPost)

module.exports = router
