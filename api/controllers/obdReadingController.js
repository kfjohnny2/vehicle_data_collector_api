'use strict';

const mongoose = require('mongoose');
const ObdReading = mongoose.model('ObdReading');

exports.list = (req, res) => {
  ObdReading
    .find({})
    .exec((err, obdReading) => {
      if (err) res.send(err);
      res.json(obdReading);
    });
};

exports.create = (req, res) => {
  let new_obd_reading = new ObdReading(req.body);
  new_obd_reading.save((err, obdReading) => {
    if (err) res.send(err);
  });
};

exports.retrieve = (req, res) => {
  ObdReading
    .findById(req.params.vehicleId)
    .exec((err, obdReading) => {
      if (err) res.send(err);
      res.json(obdReading);
    });
};

exports.update = (req, res) => {
  ObdReading
    .findOneAndUpdate({_id: req.params.vehicleId}, req.body, {new: true})
    .exec((err, obdReading) => {
      if (err) res.send(err);
      res.json(obdReading);
    });
};

exports.delete = (req, res) => {
  ObdReading
    .remove({_id: req.params.vehicleId})
    .exec((err, obdReading) => {
      if (err) res.send(err);
      res.json({message: 'Device successfully deleted'});
    });
};