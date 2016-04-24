//Using dot notation to access property values
var boscode = require('boscode');

var book;

book = {
  title : "The Hobbit", 
  author : "J. R. R. Tolkien",
  published : 1937
};

boscode.display(book.title);
boscode.display(book.author);