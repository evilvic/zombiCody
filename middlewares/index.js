exports.isLoggedIn = (req, res, next) => {
  req.isAuthenticated() ? next() : res.redirect('/auth/login')
}

exports.isActive = (req, res, next) => {
  req.user.status === 'active' ? next() : res.send('Por favor, activa tu cuenta')
}