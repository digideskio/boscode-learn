//Displaying a player's information
var boscode = require('boscode');

var showPlayerInfo;
var showPlayerName;
var showPlayerHealth;
var showPlayerPlace;

showPlayerName = function (playerName) {
  boscode.display(playerName);
};

showPlayerHealth = function (playerName, playerHealth) {
  boscode.display(playerName + ' has health ' + playerHealth);
};

showPlayerPlace = function (playerName, playerPlace) {
  boscode.display(playerName + ' is in ' + playerPlace);
};

showPlayerInfo = function (playerName, playerPlace, playerHealth) {
  boscode.display('');

  showPlayerName(playerName);

  boscode.display('----------------------------');

  showPlayerPlace(playerName, playerPlace);
  showPlayerHealth(playerName, playerHealth);

  boscode.display('----------------------------');
  boscode.display('');
};

showPlayerInfo('Kandra', 'The Dungeon of Doom', 50);
showPlayerInfo('Dax', 'The Old Library', 40);

