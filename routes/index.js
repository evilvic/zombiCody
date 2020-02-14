const express = require('express');
const router  = express.Router();

const {
  coursesView,
  courseView,
  questionView,
  validateQuestion
} = require('../controllers/coursesControllers')

const {
  isLoggedIn,
  isActive
} = require('../middlewares/index')

router
  .get('/', (req, res, next) => {
    res.render('index');
  })
  .get('/courses', coursesView)
  .get('/courses/:id', isLoggedIn, isActive, courseView)
  .get('/question/:id', isLoggedIn, isActive, questionView)
  .post('/validate/:id', isLoggedIn, isActive, validateQuestion)

module.exports = router;
