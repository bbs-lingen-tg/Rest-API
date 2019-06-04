'use strict';

const mongoose = require('mongoose');
const config = require('../config');

let connectionOption = {
  autoReconnect: true
};

mongoose.Promise = global.Promise;
console.log(config.mongo);

mongoose.connect(config.mongo, connectionOption);

let db = mongoose.connection;

db.on('error', (error) => {
  console.log(error);
});

db.on('disconnected', (error) => {
  console.log('[MONGO] MongoDB disconnected!');
  console.log(error);
});

db.once('open', () => {
  console.log('[MONGO] MongoDB connection established!');
});