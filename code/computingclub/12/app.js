//Using a property in a calculation
var boscode = require('boscode');

var player1;

player1 = {
  name: 'Max',
  score: 0
};

boscode.display(player1.name + ' has scored ' + player1.score);

player1.score = player1.score + 50;

boscode.display(player1.name + ' has scored ' + player1.score);

