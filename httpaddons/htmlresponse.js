var http = require('http');

http.ServerResponse.prototype.html = function(status, body, html) {
    if (this.responseSent)
        return;
    this.responseSent = true;
    this.setHeader('Content-Type', 'text/html');
    this.statusCode = status || 200;
    if(html)
      return this.end(body);
    this.end(`<!DOCTYPE html><html><head></head><body>${body}</body></html>`);
}
