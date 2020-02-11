const express = require('express');
const router  = express.Router();

const {
  aboutView,
  privacyView,
  termsView,
} = require('../controllers/infoControllers')

router
  .get('/about', aboutView)
  .get('/privacy', privacyView)
  .get('/terms', termsView)

module.exports = router;
