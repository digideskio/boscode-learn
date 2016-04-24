//Adding tax to find the total cost
var boscode = require('boscode');

var sale1;
var sale2;
var sale3;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };

sale1.tax = sale1.price * sale1.taxRate / 100;
sale2.tax = sale2.price * sale2.taxRate / 100;
sale3.tax = sale3.price * sale3.taxRate / 100;

sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;

boscode.display('price = $' + sale1.price);
boscode.display('tax @ ' + sale1.taxRate + '% = $' + sale1.tax);
boscode.display('total cost = $' + sale1.total);

boscode.display('price = $' + sale2.price);
boscode.display('tax @ ' + sale2.taxRate + '% = $' + sale2.tax);
boscode.display('total cost = $' + sale2.total);

boscode.display('price = $' + sale3.price);
boscode.display('tax @ ' + sale3.taxRate + '% = $' + sale3.tax);
boscode.display('total cost = $' + sale3.total);
