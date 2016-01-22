var boscode = require('boscode');

var answer = boscode.get('What day of the week is it?');

switch (answer) {
  case 'Monday':
    boscode.diplay('Monday’s child is fair of face');
    break;
    //add six more days here


  default:
    boscode.diplay('Not a day of the week');

}
