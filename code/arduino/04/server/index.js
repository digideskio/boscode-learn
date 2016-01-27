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


var led;
var socket;
var potentiometer;

//Arduino board connection
var board = new five.Board();
board.on('ready', function () {
  console.log('Arduino connected');
  led = new five.Led(9);
 
  potentiometer = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  potentiometer.on("data", function () {
    //console.log('ondata  this.raw', this.raw);
    var rawValue = this.raw;
    var value = Math.floor(rawValue / 4);
    led.brightness(value);
    if (socket) {
      socket.emit('event', value);
    }
  });


});


//Socket connection handler
io.on('connection', function (socket2) {
  console.log('connection');
  socket = socket2;

});



