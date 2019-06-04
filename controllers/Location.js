'use strict';

var utils = require('../utils/writer.js');
var Location = require('../service/LocationService');

module.exports.createLocation = function createLocation (req, res, next) {
  var client = req.swagger.params['client'].value;
  var accuracy = req.swagger.params['accuracy'].value;
  var altitude = req.swagger.params['altitude'].value;
  var altitudeAccuracy = req.swagger.params['altitudeAccuracy'].value;
  var heading = req.swagger.params['heading'].value;
  var latitude = req.swagger.params['latitude'].value;
  var longitude = req.swagger.params['longitude'].value;
  var speed = req.swagger.params['speed'].value;
  var timestamp = req.swagger.params['timestamp'].value;
  Location.createLocation(client,accuracy,altitude,altitudeAccuracy,heading,latitude,longitude,speed,timestamp)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLocations = function getLocations (req, res, next) {
  var client = req.swagger.params['client'].value;
  Location.getLocations(client)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
