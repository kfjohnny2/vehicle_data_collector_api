'use strict';

module.exports = app => {
  const obdReadingController = require('../controllers/obdReadingController');

  app.route('/obds')
    .post(obdReadingController.create)

  app.route('/obds/:vehicleId')
    .get(obdReadingController.retrieve)
    .put(obdReadingController.update)
    .delete(obdReadingController.delete)
}