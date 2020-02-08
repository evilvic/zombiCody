const { Router } = require('express')
const router = Router()
const passport = require('../config/passport')

const {
  signupView,
  signup,
  loginView,
  logout,
  confirmationView
} = require('../controllers/authControllers')

router
  .get('/signup', signupView)
  .post('/signup', signup)
  .get('/login', loginView)
  .post(
    '/login',
  passport.authenticate('local', {
    succesRedirect: '/dashboard',
    failerRedirect: '/login'
    })
  )
  .get('/logout', logout)
  .get('/confirmation', confirmationView)

module.exports = router