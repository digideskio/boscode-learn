//Passing an array to a function
var boscode = require('boscode');

var getVisitorReport = function (visitorArray, dayInWeek) {
  var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];
  var index = dayInWeek - 1;
  var visitorReport;

  visitorReport = 'There were ';
  visitorReport += visitorArray[index];
  visitorReport += ' visitors ';
  visitorReport += 'on ' + days[index];

  return visitorReport;
};

var visitors = [354, 132, 210, 221, 481];

var report = getVisitorReport(visitors, 2);

boscode.display(report);