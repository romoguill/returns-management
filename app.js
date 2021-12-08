const path = require('path');

const express = require('express');

const db = require('./data/database');
const movementsRoute = require('./routes/movementsRoute');
const configurationRoute = require('./routes/configurationRoute');
const dashboardRoute = require('./routes/dashboardRoute');
const loginRoute = require('./routes/loginRoute');

const app = express();

const PORT = 3000;

// Set up templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse url
app.use(express.urlencoded({ extended: false }));
// Parse json
app.use(express.json());
// Serve static files
app.use(express.static('public'));

// Routes Middleware
app.use(loginRoute);
app.use(dashboardRoute);
app.use(movementsRoute);
app.use(configurationRoute);

db.connectToDatabase().then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
