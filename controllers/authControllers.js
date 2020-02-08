const User = require('../models/User')

exports.signupView = (req, res) => {
  res.render('auth/signup')
}

exports.signup = (req, res) => {

}

exports.loginView = (req, res) => {
  res.render('auth/login')
}

exports.logout = (req, res) => {}

exports.dashboardView = (req, res) => {
  res.render('auth/dashboard')
}
