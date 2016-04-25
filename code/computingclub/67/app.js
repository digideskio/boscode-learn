//Calling forEach with an inline function
var boscode = require('boscode');

var items = ['The Pyramids', 'The Grand Canyon', 'Bondi Beach'];

boscode.display('Dream destinations:');

items.forEach(function (item) {
  boscode.display(' – ' + item);
});
