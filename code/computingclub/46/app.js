//Returning the sum of two numbers
var boscode = require('boscode');

var add;

add = function (number1, number2) {
  var total = number1 + number2;

  return total;
};

var sum = add(50, 23);

boscode.display(sum);