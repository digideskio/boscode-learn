// server.js
var express = require('express');
var app = express();
var httpServer = require('http').createServer(app);
var five = require('johnny-five');
var io = require('socket.io')(httpServer);

var port = 3000;

httpServer.listen(port);
console.log('Server available at http://localhost:' + port);
console.log('Waiting for connection');

var onButton;
var offButton;
var led;
var socket;

//Arduino board connection
var board = new five.Board();
board.on('ready', function () {
  console.log('Arduino connected');
  led = new five.Led(13);
  onButton = new five.Button(2);
  offButton = new five.Button(3);

  onButton.on("down", function (value) {
    console.log('onButton down');
    led.on();
    if (socket) {
      socket.emit('event', 'onButton');
    }
  });

  offButton.on("down", function () {
    console.log('offButton down');
    led.off();
    if (socket) {
      socket.emit('event', 'offButton');
    }
  });


 


});


//Socket connection handler
io.on('connection', function (socket2) {
  console.log('connection');
  socket = socket2;

});



