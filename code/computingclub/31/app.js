//Passing information to a function
var boscode = require('boscode');


var showMessage;

showMessage = function (message) {
  boscode.display('The message is: ' + message);
};

showMessage('It\'s full of stars!');
