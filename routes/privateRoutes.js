const { Router } = require('express')
const router = Router()
const {
  dashboardView,
  settingsView
} = require('../controllers/privateControllers')

router
  .get('/dashboard', dashboardView)
  .get('/settings', settingsView)

module.exports = router