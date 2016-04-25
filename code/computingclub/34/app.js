//A function with two arguments
var boscode = require('boscode');

var showSum;

showSum = function (number1, number2) {
  var total = number1 + number2;
  boscode.display('The sum is ' + total);
};

showSum(30, 23);
showSum(2.8, -5);
