const expressSession = require('express-session');
const mongoDbStore = require('connect-mongodb-session');

// Create and configure the MongoDBStore to store session data
function createSessionStore() {
  const MongoDBStore = mongoDbStore(expressSession);

  // Configure store
  let store;
  try {
    store = new MongoDBStore({
      uri: 'mongodb://localhost:27017',
      databaseName: 'returns-management',
      collection: 'sessions',
    });
    return store;
  } catch (error) {
    console.log('Error storing session ', error);
  }
}

// The session middleware needs a config object. This function returns the config object
function createSessionConfig() {
  return {
    secret: 'kjsa0vj230fjvv0wem043j4',
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      // cookie exires after 1 day (expressed in milliseconds)
      maxAge: 1000 * 60 * 60 * 24,
    },
  };
}

module.exports = createSessionConfig;
