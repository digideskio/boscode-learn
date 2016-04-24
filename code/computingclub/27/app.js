//Using functions to add and display tax
var boscode = require('boscode');

var sale1;
var sale2;
var sale3;
var sale;
var calculateTax;
var displaySale;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };

calculateTax = function () {
  sale.tax = sale.price * sale.taxRate / 100;
  sale.total = sale.price + sale.tax;
};

displaySale = function () {
  boscode.display('price = $' + sale.price);
  boscode.display('tax @ ' + sale.taxRate + '% = $' + sale.tax);
  boscode.display('total cost = $' + sale.total);
};

sale = sale1;
calculateTax();
displaySale();

sale = sale2;
calculateTax();
displaySale();

sale = sale3;
calculateTax();
displaySale();