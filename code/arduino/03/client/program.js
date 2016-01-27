var socket;

$(document).ready(function () {
  $("#outputP").html('-');

  socket = io('http://localhost:3000');
  socket.on('connect', function () {
    console.log('socket io connected');
  });

  socket.on('event', function (data) {
    console.log('on event', data);
    if (data === 'onButton') {
      $("#outputP").html('on');
    } else {
      $("#outputP").html('off');
    }

  });

  socket.on('disconnect', function () {
    console.log('socket io disconnect');
  });

});
