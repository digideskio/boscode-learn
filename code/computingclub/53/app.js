//Moving a point in 2D
var boscode = require('boscode');

var point1;
var point2;
var move;
var showPoint;

move = function (point, change) {
  return {
    x: point.x + change.x,
    y: point.y + change.y
  };
};

showPoint = function (point) {
  boscode.display('( ' + point.x + ' , ' + point.y + ' )');
};

point1 = { x: 2, y: 5 };

point2 = move(point1, { x: 4, y: -2 });

showPoint(point1);
boscode.display('Move 4 across and 2 down');
showPoint(point2);