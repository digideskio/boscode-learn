//Using Math.min and Math.max to constrain an argument
var boscode = require('boscode');

var line = function (lineLength) {
  var line = '========================================';
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return line.substr(0, lineLength);
};

boscode.display(line(30));
boscode.display(line(40));
boscode.display(line(50));
