const User = require('../models/User')
const { confirmAccount } = require('../config/nodemailer')

exports.signupView = (req, res) => {
  res.render('auth/signup')
}

exports.signup = async (req, res) => {

  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let token = ''
  for (let i = 0; i < 25; i++) {
      token += characters[Math.floor(Math.random() * characters.length )]
  }

  const { birthday, email, username, password } = req.body

  if (
    birthday === '' || 
    email === '' ||
    username === '' ||
    password === ''
  ) {
    res.render('auth/signup', { message: 'Se requiere llenar todos los campos.'})
  }

  const user = await User.findOne({ username })
  if (user) {
    res.render('auth/signup', { message: 'El nombre de usuario ya se encuentra registrado'})
  }

  const newUser = await User.register({
    birthday,
    email,
    username,
    confirmationCode: token
  }, password)

  confirmAccount(
    email,
    `http://localhost:3000/auth/activate/${token}`
    )
  res.render('auth/confirmation', newUser)

}

exports.loginView = (req, res) => {
  res.render('auth/login')
}

exports.logout = (req, res) => {
  req.logout()
  res.redirect('/')
}

exports.confirmationView = (req, res) => {
  res.render('auth/confirmation', { user: req.user })
}

exports.activateUser = async (req, res) => {
  const { token } = req.params
  const user = await User.findOneAndUpdate({ confirmationCode: token }, { status: 'active' }, { new: true })
  res.redirect('/auth/login')
}

exports.deleteAccount = async (req, res) => {
  const { username } = req.user
  await User.findOneAndDelete({ username })
  res.redirect('/')
}

exports.getStatus = (req, res) => {
  res.send(req.user)
}