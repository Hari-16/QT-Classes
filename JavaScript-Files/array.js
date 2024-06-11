// a.how to create any array?
//               1.[]
//               2.Array()
//               3.empty array
//               4.array with values
//       b.how to manage array?
              
//               a.a group of values(same/different) stored in a continious memory location
//               b.all are identfied by same name.
//               c.each value is identified by their position called index.
//               d.that index value starts with zero 0 and ends with array size minus one.
//               e.to access a value arrayname[index]
//               f.to assign a value arrayname[index] = value

product = [1001,'Apple','Fruits','Veg','1Kg',199.00,true];
book = [9001,'Javascript Step by Step','John','Black Book',499,true];
student = [8001,'John Miller','MERN',"25/04/2024","Ameerpet-Branch","Offline"];

// Creation of an Array:
        marks = Array(88,99,44,23,66,44);
	console.log(marks);
	console.log(marks[0]);
	console.log(marks[2]);
	marks[2] = 11;
	console.log(marks[2]);
        console.log(marks);
// -------------------------------
var marks = [];
console.log(marks);
console.log('size ' + marks.length);
// -------------------------------------
var marks = Array();
console.log(marks);
console.log('size ' + marks.length);
// ------------------------------------
var marks = [6];
console.log(marks);
console.log('size ' + marks.length);
// ------------------------------------
// 26th April 2024
// ---------------
	var quantities= ['1Kg','500gm','2Kg','5Kg']
var actualprices = [275,140, 549,1200]
var saleprices = [211,105,421,1053,]
var product = [
    9001,
    '23% OFF','40072494_12-bb-royal-organic-turtoor-dal.jpg',
    'Veg',
    'BB Royal',
    'Speed-Delivery',
    'Organic - Toor Da/Kandi Pappu',
    '4*',
    '17703 Ratings',
    quantities,
    actualprices,
    saleprices,
    true
];
console.log(product);
console.log('size     ' + product.length)
console.log(product[0]);
console.log(product[1]);
console.log(product[8]);
console.log(product[9]);
console.log(product[9][0]);
console.log(product[9][1]);
console.log(product[9][2]);
console.log(product[9][3]);
console.log(product[10]);
console.log(product[10][0]);
console.log(product[10][1]);
// ---------------------------------------
var marks = [11,22,89,66];
console.log(marks);
console.log('size of marks  :' + marks.length);
console.log(marks[0]);
console.log(marks[3]);
//trying to access a non-existing location 
// it returns undefined
console.log(marks[8]);
// trying to assign a value to existing location
marks[1] = 55;
console.log(marks[1]);
// trying to assign a value to non-existing location
// that location is created 
marks[9] = 36;
console.log(marks);
console.log('size of marks : ' + marks.length);
// -------------------------------------------------------
var product = [];
console.log('size of product :  '+ product.length);
console.log(product);
product[0] = 9001;
console.log('size of product :  '+ product.length);
console.log(product);
product[1] = 'Organic Toor dal';
console.log('size of product :  '+ product.length);
console.log(product);

// ---------------------------------------
var product = [];
console.log('size of product :  '+ product.length);
console.log(product);
product['Id'] = 9001;
console.log('size of product :  '+ product.length);
console.log(product);
product['Name'] = 'Organic Toor dal';
console.log('size of product :  '+ product.length);
console.log(product);
console.log(product['Id']);
console.log(product['Name']);
// --------------------------------------
var product = [];
console.log('size of product :  '+ product.length);
console.log(product);
product['Id'] = 9001;
console.log('size of product :  '+ product.length);
console.log(product);
product['Name'] = 'Organic Toor dal';
console.log('size of product :  '+ product.length);
console.log(product);
console.log(product['Id']);
console.log(product['Name']);
product[4] = '1Kg';
console.log('size of product :  '+ product.length);
console.log(product);
product[8] = 'Available';
console.log('size of product :  '+ product.length);
console.log(product);
// ----------------------------
var product = [];
console.log('size of product :  '+ product.length);
console.log(product);
product['Id'] = 9001;
console.log('size of product :  '+ product.length);
console.log(product);
product['Name'] = 'Organic Toor dal';
console.log('size of product :  '+ product.length);
console.log(product);
console.log(product['Id']);
console.log(product['Name']);
product[-10] = true;
console.log('size of product :  '+ product.length);
console.log(product);
