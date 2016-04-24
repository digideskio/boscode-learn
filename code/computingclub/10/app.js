//Concatenating string properties
var boscode = require('boscode');

var book1;
var book2;

book1 = {
  title: 'The Hobbit',
  author: 'J. R. R. Tolkien'
};

book2 = {
  title: 'Northern Lights',
  author: 'Philip Pullman'
};

boscode.display(book1.title + ' by ' + book1.author);
boscode.display(book2.title + ' by ' + book2.author);
