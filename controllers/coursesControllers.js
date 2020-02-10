const Course = require('../models/Course')

exports.coursesView = async (req, res) => {
  const allCourses = await Course.find()
  res.render('courses/courses', {allCourses})
}

exports.courseView = async (req, res) => {
  const { id } = req.params
  const course = await Course.findById(id)
  res.render('courses/course', course)
}