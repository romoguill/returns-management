const mongodb = require('mongodb');

const db = require('../data/database');

const ObjectId = mongodb.ObjectId;

class ClientProfile {
  constructor(client, config, id) {
    this.client = client;
    this.config = config;

    if (id) {
      this.id = new ObjectId(id);
    }
  }

  static async fetchAll() {
    return await db.getDb().collection('clientProfiles').find({}).toArray();
  }

  async fetchProfile() {
    return await db
      .getDb()
      .collection('clientProfiles')
      .findOne({ _id: this.id });
  }

  async save() {
    let result;
    if (this.id) {
      result = await db
        .getDb()
        .collection('clientProfiles')
        .updateOne(
          { _id: this.id },
          { $set: { client: this.client, config: this.config } }
        );
    } else {
      result = await db.getDb().collection('clientProfiles').insertOne({
        client: this.client,
        config: this.config,
      });
    }
    return result;
  }

  async delete() {
    const result = await db
      .getDb()
      .collection('clientProfiles')
      .deleteOne({ _id: this.id });
    console.log(result);
    return result;
  }
}

module.exports = ClientProfile;
