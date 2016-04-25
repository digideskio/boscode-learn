//Displaying a player's location via object properties
var boscode = require('boscode');

var player1;
var player2;
var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
  boscode.display(playerName + ' is in ' + playerPlace);
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

showPlayerPlace(player1.name, player1.place);
showPlayerPlace(player2.name, player2.place);
