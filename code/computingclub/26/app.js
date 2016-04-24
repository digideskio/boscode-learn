//Using the same function with multiple objects
var boscode = require('boscode');

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

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

showMovieInfo = function () {
  boscode.display('Movie information for ' + movie.title);
  boscode.display('------------------------------');
  boscode.display('Actors: ' + movie.actors);
  boscode.display('Directors: ' + movie.directors);
  boscode.display('------------------------------');
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

