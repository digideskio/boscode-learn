var boscode = require('boscode');

var answer = boscode.get('What day of the week is it?');

switch (answer) {
  case 'Monday':
    boscode.display('Monday\'s child is fair of face');
    break;
    //add six more days here


  default:
    boscode.display('Not a day of the week');

}
