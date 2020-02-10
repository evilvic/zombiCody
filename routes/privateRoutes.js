const { Router } = require('express')
const router = Router()
const {
  dashboardView,
  settingsView,
  update
} = require('../controllers/privateControllers')

router
  .get('/dashboard', dashboardView)
  .get('/settings', settingsView)
  .post('/update', update)

module.exports = router