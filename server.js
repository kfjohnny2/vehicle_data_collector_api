'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Import Models
const obdReadingModel = require('./api/models/obdReading');

// Configure mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/obd_db');

// Use bodyParser on project
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Import routes
const obdReadingRoutes = require('./api/routes/obdReadingRoutes');

obdReadingRoutes(app);

// Start server listener
app.listen(port);

console.log('listening on: ' + port);