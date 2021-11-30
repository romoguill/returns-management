const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'returns-management';

let database;
async function connectToDatabase() {
  // connect to server
  await client.connect();
  console.log('DB connected succesfully to server');

  database = client.db(dbName);
}

function getDb() {
  if (!database) {
    throw { message: 'You must connect first to the DB' };
  }
  return database;
}

module.exports = {
  connectToDatabase,
  getDb,
};
