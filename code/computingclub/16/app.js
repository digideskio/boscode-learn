//A player object
var boscode = require('boscode');

var player;

player = {
  name: 'Kandra',
  health: 50,
  place: 'The Dungeon of Doom',
  items: 'a rusty key, The Sword of Destiny, a piece of cheese'
};

boscode.display(player.name);
boscode.display(player.name + ' is in ' + player.place);
boscode.display(player.name + ' has health ' + player.health);
boscode.display('Items: ' + player.items);
