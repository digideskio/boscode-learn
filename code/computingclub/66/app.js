//Iterating over an array with forEach
var boscode = require('boscode');

var items,
    showInfo;

items = [
  'The Pyramids',
  'The Grand Canyon',
  'Bondi Beach'
];

showInfo = function (itemToShow) {
  boscode.display(itemToShow);
};

items.forEach(showInfo);

