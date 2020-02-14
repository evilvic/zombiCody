const Course = require('../models/Course')
const Question = require('../models/Question')
const User = require('../models/User')
const Medal = require('../models/Medal')

exports.coursesView = async (req, res) => {
  const allCourses = await Course.find()
  res.render('courses/courses', {allCourses})
}

exports.courseView = async (req, res) => {
  const { id } = req.params
  const course = await Course.findById(id)
  res.render('courses/course', {course, user: req.user})
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
    const user = await User.findById(req.user._id)
    if (user.correctQuestions.indexOf(question._id) == -1) {

      if (user.incorrectQuestions.indexOf(question._id) != -1) {
        const index = user.incorrectQuestions.indexOf(question._id)
        user.incorrectQuestions.splice(index, 1)
      }

      user.correctQuestions.push(question._id)
      switch(user.correctQuestions.length) {
        case 1:
          const medal1 = await Medal.find({name: 'Beginner zombi!'})
          user.medals.push(medal1[0]._id)
          break
        case 5:
          const medal5 = await Medal.find({name: 'Give me 5!'})
          user.medals.push(medal5[0]._id)         
          break
        case 10:
          const medal10 = await Medal.find({name: 'Give me 10!'})
          user.medals.push(medal10[0]._id)        
          break
        case 25:
          const medal25 = await Medal.find({name: 'Super Zombi!'})
          user.medals.push(medal25[0]._id) 
          break
        case 50:
          const medal50 = await Medal.find({name: 'Unstoppable Zombi!'})
          user.medals.push(medal50[0]._id)     
          break
        case 100:
          const medal100 = await Medal.find({name: 'Brain eater!'})
          user.medals.push(medal100[0]._id)    
          break      
      }

      user.percentage = Math.floor(user.correctQuestions.length / (user.correctQuestions.length + user.incorrectQuestions.length) * 100)
      user.save()

    }
    res.render('courses/question', {question, message: '¡Correcto!', nextQuestion})
  } else {
    const user = await User.findById(req.user._id)
    if (user.incorrectQuestions.indexOf(question._id) == -1) {

      if (user.correctQuestions.indexOf(question._id) != -1) {
        const index = user.correctQuestions.indexOf(question._id)
        user.correctQuestions.splice(index, 1)
      }

      user.incorrectQuestions.push(question._id)
      user.percentage = Math.floor(user.correctQuestions.length / (user.correctQuestions.length + user.incorrectQuestions.length) * 100)
      user.save()
    }
    res.render('courses/question', {question, message: '¡Intenta de nuevo!', nextQuestion})
  }
}