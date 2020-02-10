const express = require('express');
const router  = express.Router();

const {
  coursesView,
  courseView
} = require('../controllers/coursesControllers')

/* GET home page */
router
  .get('/', (req, res, next) => {
    res.render('index');
  })
  .get('/courses', coursesView)
  .get('/courses/:id', courseView)

module.exports = router;
