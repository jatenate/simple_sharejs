var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , sharejs = require('share').server;

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

var options = {db: {type: 'none'}}; // See docs for options. {type: 'redis'} to enable persistance.

// Attach the sharejs REST and Socket.io interfaces to the server
sharejs.attach(app, options);

server.listen(8000);
