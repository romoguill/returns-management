const path = require('path');

const express = require('express');
const expressSession = require('express-session');

const db = require('./data/database');
const createSessionConfig = require('./utils/session-config');

const errorController = require('./controllers/errorController');

// Middlewares
const authMiddleware = require('./middlewares/authMiddleware');

// Routes
const movementsRoute = require('./routes/movementsRoute');
const configurationRoute = require('./routes/configurationRoute');
const dashboardRoute = require('./routes/dashboardRoute');
const authRoute = require('./routes/authRoute');
const baseRoutes = require('./routes/baseRoutes');

const app = express();

const PORT = 4000;

// Create the session config object
const sessionConfig = createSessionConfig();

// Set up templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

////// MIDLEWARES
// Parse url
app.use(express.urlencoded({ extended: false }));
// Parse json
app.use(express.json());
// Serve static files
app.use(express.static('public'));

// Session middleware
app.use(expressSession(sessionConfig));

// Routes Middleware
app.use(authRoute);
app.use(authMiddleware, baseRoutes);
app.use(authMiddleware, dashboardRoute);
app.use(authMiddleware, movementsRoute);
app.use(authMiddleware, configurationRoute);

app.use(errorController.get404);

db.connectToDatabase().then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
