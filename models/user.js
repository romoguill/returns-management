const mongodb = require('mongodb');

const db = require('../data/database');

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async findByEmail(email) {
    const user = await db.getDb().collection('users').find({ email });
  }
}

module.exports = User;
