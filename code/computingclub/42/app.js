//Displaying a player's information using properties
var boscode = require('boscode');

var showPlayerName = function (playerName) {
  boscode.display(playerName);
};

var showPlayerHealth = function (playerName, playerHealth) {
  boscode.display(playerName + ' has health ' + playerHealth);
};

var showPlayerPlace = function (playerName, playerPlace) {
  boscode.display(playerName + ' is in ' + playerPlace);
};

var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
  boscode.display('');

  showPlayerName(playerName);

  boscode.display('----------------------------');

  showPlayerPlace(playerName, playerPlace);
  showPlayerHealth(playerName, playerHealth);

  boscode.display('----------------------------');
  boscode.display('');
};

var player1 = {
  name: 'Kandra',
  place: 'The Dungeon of Doom',
  health: 50
};

var player2 = {
  name: 'Dax',
  place: 'The Old Library',
  health: 40
};

showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);
