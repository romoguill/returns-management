function login(req, res) {
  const { email, password } = req.body;
  // req.session.email = email;
  // req.session.password = password;
  // req.session.save();

  res.redirect('/login');
}

module.exports = {
  login,
};
