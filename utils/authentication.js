function createUserSession(req, user, action) {
  req.session.user = user.email;
  req.session.isAdmin = user.isAdmin;

  req.session.save(action);
}

function destroyUserSession(req, action) {
  req.session.destroy(action);
}

module.exports = {
  createUserSession,
  destroyUserSession,
};
