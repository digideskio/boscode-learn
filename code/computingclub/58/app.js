//Finding a character with indexOf
var boscode = require('boscode');

var message = 'We choose to go to the Moon!';

var charIndex = message.indexOf('M');

boscode.display(message.substr(charIndex, 3));

