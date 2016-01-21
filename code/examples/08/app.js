var boscode = require('boscode');

var readRecordsFromARelativeFile = function () {
    var productData = boscode.open('productData.txt', 'relative_access');
    
    var requiredProdNumber = 1;
    
    var productRecord = productData.read(requiredProdNumber);
    
    if (productRecord === boscode.RECORD_NOT_FOUND) {
        boscode.display('Sorry - no such product');
    } else {
        boscode.display(JSON.stringify(productRecord));
    }
    
    productData.close();
};


readRecordsFromARelativeFile();
