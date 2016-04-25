//Using Math.min and Math.max
var boscode = require('boscode');

var showSmaller = function (num1, num2) {
  var smaller = Math.min(num1, num2);
  var larger = Math.max(num1, num2);

  boscode.display(smaller + ' is smaller than ' + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);
