//Displaying a multiple choice question
var boscode = require('boscode');


var displayQuestion = function (questionAndAnswer) {
  var options = ['A', 'B', 'C', 'D', 'E'];

  boscode.display(questionAndAnswer.question);

  questionAndAnswer.answers.forEach(
    function (answer, i) {
      boscode.display(options[i] + ' - ' + answer);
    }
  );
};

var question1 = {
  question: 'What is the capital of France?',
  answers: [
    'Bordeaux',
    'F',
    'Paris',
    'Brussels'
  ],
  correctAnswer: 'Paris'
};

displayQuestion(question1);

