const express = require('express');
const router  = express.Router();

const {
  coursesView,
  courseView,
  questionView,
  validateQuestion
} = require('../controllers/coursesControllers')

router
  .get('/', (req, res, next) => {
    res.render('index');
  })
  .get('/courses', coursesView)
  .get('/courses/:id', courseView)
  .get('/question/:id', questionView)
  .post('/validate/:id', validateQuestion)

module.exports = router;
