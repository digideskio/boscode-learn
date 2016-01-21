var boscode = require('boscode');

var appendNewRows = function () {
    var friendsData = boscode.open('friendsData.txt', 'append');
    
    boscode.display('Please enter the details for the first new person to be added:');
    boscode.display('Enter xxx for first name to indicate there are no more rows to be added.');
    
    var firstName = boscode.get('First Name:');
    var lastName = boscode.get('Last Name:');
    var emailAddress = boscode.get('Email Address:');
    var row = [firstName, lastName, emailAddress].join(',');
    
    while (firstName !== 'xxx') {
        
        friendsData.write(row);
        
        boscode.display('Please enter the details for the next new person to be added:');
        
        firstName = boscode.get('First Name:');
        lastName = boscode.get('Last Name:');
        emailAddress = boscode.get('Email Address:');
        row = [firstName, lastName, emailAddress].join(',');
    }
    
    friendsData.close();
};

appendNewRows();