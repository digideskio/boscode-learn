//A calendar event
var boscode = require('boscode');


var event = {
  title: "Appraisal Meeting",
  startDate: "2016-10-04 16:00:00",
  endDate: "2016-10-04 17:00:00",
  location: "Martha\'s office",
  importance: 1,
  notes: 'Don\'t forget the portfolio!'
};

boscode.display('event = ', event);
