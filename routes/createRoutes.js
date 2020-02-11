const { Router } = require('express')
const router = Router()
const uploadCloud = require('../config/cloudinary')
const {
  createCourseView,
  createCoursePost
} = require('../controllers/createControllers')

router
  .get('/course', createCourseView)
  .post('/course', uploadCloud.single('portrait'), createCoursePost)

module.exports = router