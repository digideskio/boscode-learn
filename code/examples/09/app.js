var boscode = require('boscode');

var updateRecordsInARelativeFile = function () {
    var productData = boscode.open('productData.txt', 'relative_access');
    
    var requiredProdNumber = 1;
    
    var productRecord = productData.read(requiredProdNumber);
    
    if (productRecord === boscode.RECORD_NOT_FOUND) {
        boscode.display('Sorry - no such product');
    } else {
        boscode.display(JSON.stringify(productRecord));
        productRecord.price = 1000;
        
        productData.write(productRecord, 'productNumber');
    }
    
    productData.close();
};

updateRecordsInARelativeFile();
