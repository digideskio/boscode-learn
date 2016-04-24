//A function to display player information
var boscode = require('boscode');

var player1;
var player2;
var player;
var showPlayerInfo;

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

showPlayerInfo = function () {
  boscode.display(player.name);
  boscode.display('------------------------------');
  boscode.display(player.name + ' is in ' + player.place);
  boscode.display(player.name + ' has health ' + player.health);
  boscode.display('------------------------------');
  boscode.display('');
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();

