var boscode = require('boscode');

var displayFileContents = function () {
    var friendsData = boscode.open('friendsData.txt', 'input');
    
    var row = friendsData.read();
    
    var tempArray, firstName, lastName, emailAddress;
    
    while (row !== boscode.EOF) {
        tempArray = row.split(',');
        firstName = tempArray[0];
        lastName = tempArray[1];
        emailAddress = tempArray[2];
        boscode.display(firstName, lastName, emailAddress);
        
        row = friendsData.read();
    }
    
    friendsData.close();
};
 

displayFileContents();