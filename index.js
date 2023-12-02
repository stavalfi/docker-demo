const http = require('http');

http.createServer( (_req, res)=> {
  res.write(`Hi!!! Date: ${new Date().toISOString()}`);
  res.end();
}).listen(8080);

console.log("listening... http://localhost:8080")