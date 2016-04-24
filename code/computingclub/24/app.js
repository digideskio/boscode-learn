//Using a function to display object properties
var boscode = require('boscode');

var showMovieInfo;

showMovieInfo = function () {
  boscode.display('Movie information for ' + movie.title);
  boscode.display('------------------------------');
  boscode.display('Actors: ' + movie.actors);
  boscode.display('Directors: ' + movie.directors);
  boscode.display('------------------------------');
};


