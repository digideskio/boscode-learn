//Using the return value as an argument
var boscode = require('boscode');

var getHelloTo;

getHelloTo = function (name) {
  return 'Hello to ' + name;
};

boscode.display(getHelloTo('Kandra'));
boscode.display(getHelloTo('Dax'));