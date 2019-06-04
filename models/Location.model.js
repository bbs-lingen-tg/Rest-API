const mongoose = require('bluebird').promisifyAll(require('mongoose'));

var schema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  client: {
    type: String,
    index: true
  },
  coords: {
    accuracy: {
      type: Number
    },
    altitude: {
      type: Number
    },
    altitudeAccuracy: {
      type: Number
    },
    heading: {
      type: Number
    },
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    },
    speed: {
      type: Number
    }
  },
  timestamp: {
    type: Number
  }
});

schema.statics.createLocation = function(client, accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed, timestamp) {
  return new Promise((resolve, reject) => {
    var location = new model({
      client: client,
      coords: {
        accuracy: accuracy,
        altitude: altitude,
        altitudeAccuracy: altitudeAccuracy,
        heading: heading,
        latitude: latitude,
        longitude: longitude,
        speed: speed
      },
      timestamp: timestamp
    });

    location.save().then((res) => {
      resolve(res);
    })
    .catch((error) => reject(error));
  });
}

schema.statics.getLocations = function(client) {
  return new Promise((resolve, reject) => {
    return model.find({client: client}).exec().then((locations) => {
      resolve(locations);
    }).catch((error) => reject(error));
  });
}

var model = mongoose.model('Location', schema);
module.exports = model;