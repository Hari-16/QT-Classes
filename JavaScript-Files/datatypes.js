price 
console.log(price);
// Note: ReferenceError: price is not defined

var price 
console.log(price);
//Output: undefined

price = 99; 
console.log(price);
//Output: 99

var price = 99; 
console.log(price);
//Output : 99;


// javaScript data types
console.log('start of the javascript program');
price = 99.126; 
console.log(price +'   '+ typeof(price));
price = 'john';
console.log(price +'   '+ typeof(price));
price = "miller";
console.log(price +'   '+ typeof(price));
price = 'j';
console.log(price +'   '+ typeof(price));
price = "a";
console.log(price +'   '+ typeof(price));
price="123#admin";
console.log(price +'   '+ typeof(price));
price = true;
console.log(price +'   '+ typeof(price));
price = false;
console.log(price +'   '+ typeof(price));
price = null;
console.log(price +'   '+ typeof(price));
price = undefined;
console.log(price +'   '+ typeof(price));
price = [];
console.log(price +'   '+ typeof(price));
function Add(a, b)
{
    console.log(a+b);
}

Add(9,19);

price = Add;
console.log(price +'   '+ typeof(price));
price(10,20);
