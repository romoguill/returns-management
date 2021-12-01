const path = require('path');

const express = require('express');

const db = require('./data/database');
const movements = require('./routes/movementsRoute');
const configuration = require('./routes/configurationRoute');

const app = express();

const PORT = 3000;

// Set up templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse url
app.use(express.urlencoded({ extended: false }));
// Serve static files
app.use(express.static('public'));

// Routes Middleware
app.use(movements);
app.use(configuration);

db.connectToDatabase().then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
