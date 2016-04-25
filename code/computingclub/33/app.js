//Using the square function
var boscode = require('boscode');

var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  boscode.display(numberToSquare + ' * ' + numberToSquare + ' = ' + result);
};

square(10);
square(-2);
square(1111);
square(0.5);