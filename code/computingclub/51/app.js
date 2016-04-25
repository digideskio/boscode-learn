//A function that adds properties to an object
var boscode = require('boscode');

var planet1 = { name: 'Jupiter', radius: 69911 };

var calculateSizes = function (planet) {
  var r = planet.radius;
  planet.area = 4 * 3.142 * r * r;
  planet.volume = 4 * 3.142 * r * r * r / 3;
};

var displaySizes = function (planet) {
  boscode.display(planet.name);
  boscode.display('surface area = ' + planet.area + ' square km');
  boscode.display('volume = ' + planet.volume + ' cubic km');
};

calculateSizes(planet1);
displaySizes(planet1);
