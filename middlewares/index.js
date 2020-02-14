exports.isLoggedIn = (req, res, next) => {
  req.isAuthenticated() ? next() : res.redirect('/auth/login')
}

exports.isActive = (req, res, next) => {
  req.user.status === 'active' ? next() : res.send('Por favor, activa tu cuenta')
}

exports.nav = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.app.locals.logged = true
  } else {
    req.app.locals.logged = false
  }
  next()
}

exports.isTeacher = (req, res, next) => {
  if (req.user.role === 'teacher') {
    next()
  } else {
    res.redirect('/')
  }
} 



