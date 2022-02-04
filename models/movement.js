const mongodb = require('mongodb');

const db = require('../data/database');

const ObjectId = mongodb.ObjectId;

class Movement {
  constructor(productId, client, flow, id, status = '', date = new Date()) {
    this.productId = productId;
    this.client = client;
    this.flow = flow;
    this.status = status;
    this.date = date;

    if (id) {
      this.id = new ObjectId(id);
    }
  }

  static async fetchAll() {
    return db.getDb().collection('movements').find({}).toArray();
  }

  async save() {
    // Check if movement has an id which means that already exists. If it does then update with the new info, else create a new one.
    if (this.id) {
      await db
        .getDb()
        .collection('movements')
        .updateOne(
          { _id: this.id },
          {
            $set: {
              productId: this.productId,
              client: this.client,
              flow: this.flow,
              date: this.date,
              status: this.status,
            },
          }
        );
    } else {
      await db.getDb().collection('movements').insertOne({
        productId: this.productId,
        client: this.client,
        flow: this.flow,
        status: this.status,
        date: new Date(),
      });
    }
  }

  static getAllUnsettledOutboundMovements() {
    return db
      .getDb()
      .collection('movements')
      .find({ status: { $ne: 'Returned' }, flow: 'Outbound' })
      .toArray();
  }

  static getFirstUnsettledOutboundMovement(productId, client) {
    return db
      .getDb()
      .collection('movements')
      .findOne({
        status: { $ne: 'Returned' },
        productId,
        flow: 'Outbound',
        client,
      });
  }

  calculateStatus(clientProfile) {
    // Delay will be calculated as the difference in days from today and the movement date
    const delayDays = (new Date() - this.date) / (1000 * 60 * 60 * 24);

    // Extract the configuration for the 3 products
    const {
      containerWarning,
      containerMax,
      bulkWarning,
      bulkMax,
      cartWarning,
      cartMax,
    } = clientProfile.config;

    // Set the corresponding config for the amount of days for warning and max status.
    let daysWarning;
    let daysMax;
    if (this.productId === '001') {
      daysWarning = containerWarning;
      daysMax = containerMax;
    } else if (this.productId === '002') {
      daysWarning = bulkWarning;
      daysMax = bulkMax;
    } else {
      daysWarning = cartWarning;
      daysMax = cartMax;
    }

    if (delayDays <= daysWarning) {
      return 'Ok';
    } else if (delayDays <= daysMax) {
      return 'Warning';
    } else {
      return 'Exceeded';
    }
  }

  async updateStatus(profile) {
    const status = this.calculateStatus(profile);
    this.status = status;
    this.save();
  }
}

module.exports = Movement;
