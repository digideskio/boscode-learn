//Displaying a player's health
var boscode = require('boscode');

var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
  boscode.display(playerName + ' has health ' + playerHealth);
};

showPlayerHealth('Kandra', 50);
showPlayerHealth('Dax', 40);