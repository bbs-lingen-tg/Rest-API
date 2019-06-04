'use strict';

const http = require('http');

http.ServerResponse.prototype.error = function(code, message, status) {
    this.json({code: code, message: message}, status || code);
}

http.ServerResponse.prototype.internalError = function( err, message, code, details ) {
  let out = {};
  
  if (details)
    out.details = details;
  
  out.message = message;
  out.code = code || 500;
  this.json(out);
}
