//Relying on a variable outside of the function
var boscode = require('boscode');


var message;
var showMessage;

message = 'It\'s full of stars!';

showMessage = function () {
  boscode.display(message);
};

showMessage();
