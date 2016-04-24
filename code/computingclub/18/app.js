//Displaying information from similar objects
var boscode = require('boscode');

var movie1;
var movie2;
var movie3;

movie1 = {
  title: 'Inside Out',
  actors: 'Amy Poehler, Bill Hader',
  directors: 'Pete Doctor, Ronaldo Del Carmen'
};

movie2 = {
  title: 'Spectre',
  actors: 'Daniel Craig, Christoph Waltz',
  directors: 'Sam Mendes'
};

movie3 = {
  title: 'Star Wars: Episode VII - The Force Awakens',
  actors: 'Harrison Ford, Mark Hamill, Carrie Fisher',
  directors: 'J.J.Abrams'
};

boscode.display('Movie information for ' + movie1.title);
boscode.display('------------------------------');
boscode.display('Actors: ' + movie1.actors);
boscode.display('Directors: ' + movie1.directors);
boscode.display('------------------------------');

boscode.display('Movie information for ' + movie2.title);
boscode.display('------------------------------');
boscode.display('Actors: ' + movie2.actors);
boscode.display('Directors: ' + movie2.directors);
boscode.display('------------------------------');

boscode.display('Movie information for ' + movie3.title);
boscode.display('------------------------------');
boscode.display('Actors: ' + movie3.actors);
boscode.display('Directors: ' + movie3.directors);
boscode.display('------------------------------');