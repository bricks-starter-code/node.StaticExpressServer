var express = require('express');
var path = require('path');
var app = express();

var port = 3000;

app.use(express.static(path.join(__dirname, 'static')));

// Listen for requests
var server = app.listen(port, function() {
  console.log('Loaded on port: ' + port);
});
