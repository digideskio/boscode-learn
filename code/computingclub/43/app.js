//Returning a value from a function
var boscode = require('boscode');

var getMessage;
var response;

getMessage = function () {
  return 'I\'m going on an adventure!';
};

response = getMessage();

boscode.display(response);
