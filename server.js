var express = require("express");
var app = express();

// Serve out the index
app.get("/", function(req, res) {
	res.sendfile('index.html');
});

// Wildcard 
app.get("/*", function(req, res) {
	console.log(req.path + ' requested');
	res.sendfile(req.path.substr(1));
});

// Set up port
var server = app.listen(3000, function() {
    console.log(' - Listen to port ' + server.address().port);
});
