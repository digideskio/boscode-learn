//A function to create planets
var boscode = require('boscode');

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
  return {
    name: name,
    position: position,
    type: type,
    radius: radius,
    sizeRank: rank
  };
};

getPlanetInfo = function (planet) {
  return planet.name.toUpperCase() + ': planet ' + planet.position;
};

planet1 = buildPlanet('Jupiter', 5, 'Gas Giant', 69911, 1);
planet2 = buildPlanet('Neptune', 8, 'Ice Giant', 24622, 4);

boscode.display(getPlanetInfo(planet1));
boscode.display(getPlanetInfo(planet2));