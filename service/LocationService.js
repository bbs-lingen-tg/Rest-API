'use strict';

const Location = require('../models/Location.model');

exports.createLocation = function(client, accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed, timestamp) {
  return Location.createLocation(client, accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed, timestamp);
}

exports.getLocations = function(client) {
  return Location.getLocations(client);
}

