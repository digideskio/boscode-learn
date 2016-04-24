//Using the findTotal function to display a calculation
var boscode = require('boscode');

var number1 = 1000;
var number2 = 66;
var result;
var findTotal;

findTotal = function () {
  result = number1 + number2;
};

findTotal();

boscode.display(number1 + ' + ' + number2 + ' = ' + result);
