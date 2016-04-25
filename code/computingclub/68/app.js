//Using the arguments passed by forEach
var boscode = require('boscode');

var players;
var showArguments;

players = ['Dax', 'Jahver', 'Kandra'];

showArguments = function (item, index, wholeArray) {
  boscode.display('Item: ' + item);
  boscode.display('Index: ' + index);
  boscode.display('Array: ' + wholeArray);
};

players.forEach(showArguments);
