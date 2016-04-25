//Calling the same function with different arguments
var boscode = require('boscode');

var showMessage;

showMessage = function (message) {
  boscode.display('The message is: ' + message);
};

showMessage('It\'s full of stars!');
showMessage('Hello to Jason Isaacs');
showMessage('Hello to Jason Isaacs and Stephen Fry');
