//Using dot notation to update a property
var boscode = require('boscode');

var player1;

player1 = {
  name: "Max",
  attempted: 0,
  correct: 0
};

player1.attempted = 1;
player1.correct = 1;
player1.score = 50;

boscode.display('player1 = ', player1);