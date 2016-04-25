//A function with three arguments
var boscode = require('boscode');

var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours) {
  return callOutCharge + costPerHour * numberOfHours;
};

boscode.display('$' + totalCost(30, 40, 3));


