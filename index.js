var mini_harp = function(root) {
  var app = require("connect")(), //Create connect app
      serveStatic = require('serve-static'),
      makeJade = require('./lib/processor/jade') ,
      makeLess = require('./lib/processor/less'),
      path = require('path');

  return app.use(function(req,res,next) {
    if (req.url == "/") {
      req.url = "/index.html";
      next();
    } else if(path.extname(req.url) == '.less' || path.extname(req.url) == '.jade') {
      res.statusCode = 404;
      res.end();
    } else{
      next();
    } 
  }) //Add a middleware rewrite the ur
  .use(makeJade(root))
    .use(makeLess(root))
    .use(serveStatic(root))
    .use(function(request,response,next) {
      if (request.url === "/current-time" && request.method === "GET") {
        response.end((new Date()).toISOString()+"\n");
      }
      else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html");
        response.end("Cannot GET" + request.url+"\n");
      }
    }); 
}

module.exports = mini_harp
