const User = require('../models/user');
const authUtil = require('../utils/authentication');

function getLogin(req, res) {
  res.render('login');
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = new User(email, password);

  // Store user if exists
  let existingUser;
  try {
    existingUser = await user.findByEmail();
  } catch (error) {
    console.log(error);
  }

  // Check if user exists
  if (!existingUser) {
    return res.redirect('/login');
  }

  // Check is passwords match
  if (!user.isPasswordCorrect(existingUser.password)) {
    return res.redirect('/login');
  }

  // Create a new session
  authUtil.createUserSession(req, user, () => res.redirect('/dashboard'));
}

function logout(req, res) {
  authUtil.destroyUserSession(req, () => res.redirect('/login'));
}

module.exports = {
  getLogin,
  login,
  logout,
};
