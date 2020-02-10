const Course = require('../models/Course')
const Question = require('../models/Question')

exports.coursesView = async (req, res) => {
  const allCourses = await Course.find()
  res.render('courses/courses', {allCourses})
}

exports.courseView = async (req, res) => {
  const { id } = req.params
  const course = await Course.findById(id)
  res.render('courses/course', course)
}

exports.questionView = async (req, res) => {
  const { id } = req.params
  const questions = await Question.find()
  const question = await Question.findById(id)
  let position
  questions.forEach((element, index) => {
    if (element._id.toString() == question._id.toString()) {
      position = index
      return position
    }
  })
  console.log(questions[position + 1])
  res.render('courses/question', question)
}