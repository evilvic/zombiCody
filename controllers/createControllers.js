const Course = require('../models/Course')

exports.createCourseView = (req, res) => {
  res.render('create/course')
}

exports.createCoursePost = async (req, res) => {

  const { title, description } = req.body
  console.log(req.body)
  console.log(req.file)
  

  const { secure_url: image_URL } = req.file

  await Course.create({
    title, 
    description,
    image_URL
  })

  res.redirect('/')

}