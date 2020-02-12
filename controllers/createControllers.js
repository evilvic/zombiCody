const Course = require('../models/Course')
const Question = require('../models/Question')

exports.createCourseView = (req, res) => {
  res.render('create/course')
}

exports.createCoursePost = async (req, res) => {

  const { title, description } = req.body

  const { secure_url: image_URL } = req.file

  const newCourse = await Course.create({
    title, 
    description,
    image_URL
  })

  res.redirect(`/create/course/${newCourse._id}`)

}

exports.createQuestionView = async (req, res) => {
  const { id } = req.params
  const course = await Course.findById(id)
  res.render('create/question', course)
}

exports.createQuestionPost = async (req, res) => {

  const { id } = req.params

  const {
    content,
    option1,
    option2,
    option3,
    option4,
    option5,
    solution,
    feedback
  } = req.body

  const { secure_url: image_URL } = req.file

  const newQuestion = await Question.create(
    {
      content,
      image_URL,
      option1,
      option2,
      option3,
      option4,
      option5,
      solution,
      feedback
    }
  )

  const questionId = newQuestion._id

  const course = await Course.findById(id)

  course.questions.push(questionId)

  course.save()

  res.redirect(`/create/course/${id}`)


}