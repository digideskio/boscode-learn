var socket;

$(document).ready(function () {
  $('#outputP').html('-');

  socket = io('http://localhost:3000');
  socket.on('connect', function () {
    console.log('socket io connected');
  });

  socket.on('event', function (data) {
    data = parseInt(data);
    console.log('on event', data);    
    $('#outputP').html(data);
    var pwith = Math.floor(100 * data / 255 );
    $('#potentiometer-progress-bar').width(pwith + '%');

  });

  socket.on('disconnect', function () {
    console.log('socket io disconnect');
  });

});
