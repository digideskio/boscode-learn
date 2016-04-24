//Displaying an object's properties on the console
var boscode = require('boscode');

var movie1;

movie1 = {
  title: 'Inside Out',
  actors: 'Amy Poehler, Bill Hader',
  directors: 'Pete Doctor, Ronaldo Del Carmen'
};

boscode.display('Movie information for ' + movie1.title);
boscode.display('------------------------------');
boscode.display('Actors: ' + movie1.actors);
boscode.display('Directors: ' + movie1.directors);
boscode.display('------------------------------');

