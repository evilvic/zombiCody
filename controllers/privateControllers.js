exports.dashboardView = (req, res) => {
  res.render('private/dashboard', req.user)
}

exports.settingsView = (req, res) => {
  res.render('private/settings')
}
