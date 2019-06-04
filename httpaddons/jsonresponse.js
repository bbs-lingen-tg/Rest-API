var http = require('http');

http.ServerResponse.prototype.json = function(json, status) {
    if (this.responseSent)
        return;
    this.responseSent = true;
    this.setHeader('Content-Type', 'application/json');
    this.statusCode = status || 200;
    this.end(JSON.stringify(json || {}, null, 2));
}
