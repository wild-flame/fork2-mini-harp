var mini_harp = function(par_port, par_path) {
  var app = require("connect")(); //Create connect app
  var DEFAULT_PORT = 4000; 
  var DEFAULT_PATH = process.cwd(); // current directory
  var serveStatic = require('serve-static');

  if (par_port) {
    port = par_port; // Let the port equals to the specified port
  } else {
    port = DEFAULT_PORT; // Let the port be the DEFAULT_PORT 
  }
  if (par_path) {
    path = par_path; 
  } else {
    path = DEFAULT_PATH;
  }
  console.log("Starting mini-harp on http://localhost:"+port);
  app.use(serveStatic(path)).use(function(request,response,next) {
    console.log("request.url: " + request.url)
      if (request.url === "/current-time" && request.method === "GET") {
        response.end((new Date()).toISOString()+"\n");
      } else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html");
        response.end("Cannot GET" + request.url+"\n");
      }
  }
  ).listen(port); 
}

module.exports = mini_harp
