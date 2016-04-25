//Passing a function an object as an argument
var boscode = require('boscode');

var planet1;
var getPlanetInfo;

planet1 = {
  name: 'Jupiter',
  position: 5,
  type: 'Gas Giant',
  radius: 69911,
  sizeRank: 1
};

getPlanetInfo = function (planet) {
  return planet.name + ': planet number ' + planet.position;
};

boscode.display(getPlanetInfo(planet1));