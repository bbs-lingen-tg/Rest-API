


var http = require('http');

 http.ServerResponse.prototype.redirect = function(location){
   if(this.responseSent)
    return;
   this.responseSent = true;
   this.writeHead(302, {
     'Location': location
   });
   this.end();
 }
