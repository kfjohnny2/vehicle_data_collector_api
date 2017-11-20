'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ObdReadingSchema = new Schema({
  vehicleId: {
    type: String,
    required: [true, 'Vehicle Id is required']
  },
  timestamp: {
    type: Date,
    required: [true, 'Timestamp is required']
  },
  latitude: {
    type: Number,
    required: [true, 'Latitude is required']
  },
  longitude: {
    type: Number,
    required: [true, 'Longitude is required']
  },
  altitude: {
    type: Number,
    required: [true, 'Altitude is required']
  },

  readings: {
    type: Number,
    required: [true, 'Readings is required']
  }
});

module.exports = mongoose.model('ObdReading', ObdReadingSchema);