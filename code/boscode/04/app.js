var boscode = require('boscode');

var displayFileContents = function () {
    var friendsData = boscode.open('friendsData.txt', 'input');
    
    var row = friendsData.read();
    var tempArray = row.split(',');
    var firstName = tempArray[0];
    var lastName = tempArray[1];
    var emailAddress = tempArray[2];
    
    while (firstName !== 'xxx') {
        boscode.display(firstName, lastName, emailAddress);
        
        row = friendsData.read();
        tempArray = row.split(',');
        firstName = tempArray[0];
        lastName = tempArray[1];
        emailAddress = tempArray[2];
    }
    
    friendsData.close();
};

displayFileContents();