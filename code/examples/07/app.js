var boscode = require('boscode');

var createARelativeFile = function () {
    var productData = boscode.open('productData.txt', 'relative_access');
    
    var productObject = {
        productNumber: 1,
        description: 'Laundry Liquid 2L',
        quantity: 100,
        price: 1.49
    };
    
    productData.write(productObject, 'productNumber');
    
    productObject = {
        productNumber: 2,
        description: 'Mate Laundry Liquid 1L',
        quantity: 300,
        price: 3.99
    };
    
    productData.write(productObject, 'productNumber');
    
    productData.close();
};

createARelativeFile();
