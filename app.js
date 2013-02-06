var express = require('express')
  , http = require('http')
  , socketio = require('socket.io')
  , sharejs = require('share').server;

var app = express();
var server = http.createServer(app);

socketio.listen(server);

// Server static files from /public
app.use(express.static(__dirname + '/public'));

// See share.js docs for options. This is where you would enable redis
// for persistence.
var options = {db: {type: 'none'}};

// Attach the sharejs REST and Socket.io interfaces to the server
sharejs.attach(app, options);

server.listen(8000);
