const http = require('http');
const info = require('./notes');

http.createServer((request, response) => {
  response.writeHead(200,{'Content-Type':'appliaction\json'});
  response.end();
}).listen(8080);