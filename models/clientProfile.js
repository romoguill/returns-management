const mongodb = require('mongodb');

const db = require('../data/database');

class ClientProfile {
  constructor(client, config) {
    this.client = client;
    this.config = config;
  }

  static async fetchAll() {
    return await db.getDb().collection('client-profiles').find({});
  }

  async fetch() {
    return await db
      .getDb()
      .collection('client-profiles')
      .findOne({ client: this.client });
  }

  async create() {
    return await db
      .getDb()
      .collection('client-profiles')
      .insertOne({ client: this.client, config: this.config });
  }

  async update() {
    return await db
      .getDb()
      .collection('client-profiles')
      .updateOne({ client: this.client }, { $set: { config: this.config } });
  }
}
