function verifyCredentials(req, res, next) {
  // Check if user is logged in by checking if the session has an user property
  console.log(req.session);
  if (!req.session.user) {
    return res.status(401).redirect('/login');
  }

  // Set locals variables to use in the views for the req res cycle
  res.locals.isAuth = true;
  res.locals.isAdmin = req.session.isAdmin;

  next();
}

module.exports = verifyCredentials;
