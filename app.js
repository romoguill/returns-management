const express = require('express');

const db = require('./data/database');

const app = express();

const PORT = 3000;

db.connectToDatabase().then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
