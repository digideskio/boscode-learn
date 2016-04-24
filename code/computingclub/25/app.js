//Calling the showMovieInfo function
var boscode = require('boscode');

var movie1;
var showMovieInfo;
var movie;

movie1 = {
  title: 'Inside Out',
  actors: 'Amy Poehler, Bill Hader',
  directors: 'Pete Doctor, Ronaldo Del Carmen'
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


