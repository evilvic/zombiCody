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
  const nextQuestion = questions[position + 1]._id
  res.render('courses/question', {question, nextQuestion})
}

exports.validateQuestion = async (req, res) => {
  const { response } = req.body
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
  const nextQuestion = questions[position + 1]._id
  if (response === question.solution) {
    res.render('courses/question', {question, message: 'Correcto!', nextQuestion})
  }
}