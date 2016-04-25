//Manipulating arrays with push, pop and join
var boscode = require('boscode');


var items = [];
var item = 'The Pyramids';
var removed;

items.push(item);
items.push('The Grand Canyon');
items.push('Bondi Beach');

boscode.display(items);

removed = items.pop();

boscode.display(removed + ' was removed');
boscode.display(items.join(' and '));
