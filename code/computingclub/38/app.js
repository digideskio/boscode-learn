//Displaying a player's health via object properties
var boscode = require('boscode');

var player1;
var player2;
var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
  boscode.display(playerName + ' has health ' + playerHealth);
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

showPlayerHealth(player1.name, player1.health);
showPlayerHealth(player2.name, player2.health);
