//Using a variable’s current value to set its new value
var boscode = require('boscode');

var score;

score = 100;
boscode.display("Your score was " + score);

boscode.display("Great splat!!!");
score = score + 50;
boscode.display("New score: " + score);

boscode.display("Way to go!");

