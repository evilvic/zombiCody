const express = require('express');
const router  = express.Router();

const {
  coursesView,
  courseView,
  questionView
} = require('../controllers/coursesControllers')

/* GET home page */
router
  .get('/', (req, res, next) => {
    res.render('index');
  })
  .get('/courses', coursesView)
  .get('/courses/:id', courseView)
  .get('/question/:id', questionView)

module.exports = router;
