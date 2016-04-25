//Displaying a player's location
var boscode = require('boscode');

var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
  boscode.display(playerName + ' is in ' + playerPlace);
};

showPlayerPlace('Kandra', 'The Dungeon of Doom');
showPlayerPlace('Dax', 'The Old Library');
