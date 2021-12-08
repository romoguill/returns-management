function createUserSession(req, user, action) {
  req.session.user = user.email;
  req.session.isAdmin = user.isAdmin;

  req.session.save(action);
}

module.exports = {
  createUserSession,
};
