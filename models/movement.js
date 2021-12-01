const mongodb = require('mongodb');

const db = require('../data/database');

const ObjectId = mongodb.ObjectId;

class Movement {
  constructor(productId, client, flow, id) {
    this.productId = productId;
    this.client = client;
    this.flow = flow;

    if (id) {
      this.id = new ObjectId(id);
    }
  }

  static async fetchAll() {
    return db.getDb().collection('movements').find({}).toArray();
  }

  async create() {
    const movement = db.getDb().collection('movements').insertOne({
      productId: this.productId,
      client: this.client,
      flow: this.flow,
      date: new Date(),
    });
  }

  async calculateStatus() {}
}

module.exports = Movement;
