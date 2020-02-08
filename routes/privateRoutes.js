const { Router } = require('express')
const router = Router()
const {
  dashboardView
} = require('../controllers/privateControllers')

router.get('/dashboard', dashboardView)

module.exports = router