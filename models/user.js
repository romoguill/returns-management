const mongodb = require('mongodb');

const db = require('../data/database');

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async findByEmail() {
    return await db.getDb().collection('users').findOne({ email: this.email });
  }

  isPasswordCorrect(password) {
    return password === this.password;
  }
}

module.exports = User;
