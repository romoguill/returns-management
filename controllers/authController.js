const User = require('../models/user');
const authUtil = require('../utils/authentication');

async function login(req, res) {
  const { email, password } = req.body;
  // req.session.email = email;
  // req.session.password = password;
  // req.session.save();

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

module.exports = {
  login,
};
