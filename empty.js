var connect = require('connect');

// create a cpnnect app
var app = connect();

// start the ap  as an heep server on port 4000
console.log("Starting http server on http://localhost:4000");
app.listen(4000);
