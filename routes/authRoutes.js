const { Router } = require('express')
const router = Router()
const passport = require('../config/passport')

const {
  signupView,
  signup,
  loginView,
  logout,
  confirmationView,
  activateUser,
  deleteAccount
} = require('../controllers/authControllers')

router
  .get('/signup', signupView)
  .post('/signup', signup)
  .get('/login', loginView)
  .post(
    '/login',
  passport.authenticate('local', {
    successRedirect: '/private/dashboard',
    failureRedirect: '/auth/login'
    })
  )
  .get('/logout', logout)
  .get('/confirmation', confirmationView)
  .get('/activate/:token', activateUser)
  .post('/delete', deleteAccount)

module.exports = router