// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Database connections
const db1Connection = mongoose.createConnection(config.db1.url, { useNewUrlParser: true, useUnifiedTopology: true });
const db2Connection = mongoose.createConnection(config.db2.url, { useNewUrlParser: true, useUnifiedTopology: true });

// Event listeners for database connections
db1Connection.on('connected', () => {
  console.log('Connected to db1');
});

db1Connection.on('error', (err) => {
  console.error('Error connecting to db1:', err);
});

db2Connection.on('connected', () => {
  console.log('Connected to db2');
});

db2Connection.on('error', (err) => {
  console.error('Error connecting to db2:', err);
});

// Make connections available throughout the app
app.use((req, res, next) => {
  req.db1 = db1Connection;
  req.db2 = db2Connection;
  next();
});

// Routes
const db1Routes = require('./Routes/db1Routes');
const db2Routes = require('./Routes/db2Routes');

app.use('/db1', db1Routes);
app.use('/db2', db2Routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
