//Displaying a player's name via an object property
var boscode = require('boscode');

var player1;
var player2;
var showPlayerName;

showPlayerName = function (playerName) {
  boscode.display(playerName);
};

player1 = {
  name: 'Kandra',
  place: 'The Dungeon of Doom',
  health: 50
};

player2 = {
  name: 'Dax',
  place: 'The Old Library',
  health: 40
};

showPlayerName(player1.name);
showPlayerName(player2.name);
