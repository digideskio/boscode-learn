//Using an argument to determine the return value
var boscode = require('boscode');

var getHelloTo;
var fullMessage;

getHelloTo = function (name) {
  return 'Hello to ' + name;
};

fullMessage = getHelloTo('Kandra');

boscode.display(fullMessage);