var boscode = require('boscode');

var createASequentialFile = function () {
    var friendsData = boscode.open('friendsData.txt', 'output');
    
    var firstName = 'Joe';
    var lastName = 'Bloggs';
    var emailAddress = 'jbloggs@example.com';
    
    var row = [firstName, lastName, emailAddress].join(','); // creates a comma separated string 
    
    friendsData.write(row);
    
    firstName = 'Jim';
    lastName = 'Doe';
    emailAddress = 'jdoe@example.com';
    
    row = [firstName, lastName, emailAddress].join(','); // creates a comma separated string 
    
    friendsData.write(row);
    
    friendsData.close();
};

createASequentialFile();
