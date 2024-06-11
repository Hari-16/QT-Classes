// -----------------------------------------
// 30th April 2024
// ---------------
//      function
//      method
//            - a group of one or more related statements identified by a name.
//            - reusability
//            - avoids duplication of code.
//            - write once , use whereever required

// creation of functiion
// function <name of the function>([...input parameters....])
// {
// 
// }

// how to call a function?

// <name of the function>([...arguments....]);

// -------------------
function add()
{
    console.log(' i am from add');
}

add();
//Add(); //ReferenceError: Add is not defined
// -------------------------------------------------
function add(x, y) // x, y are input parameters
{
    console.log(' i am from add    ' + (x+y));
}

add(10,20); // 10 20 are arguments
// -----------------------------------------
function add(x, y) // x, y are input parameters
{
    console.log(' i am from add    ' + (x+y));
}

add(10,20); // 10 20 are arguments
add(199.29,446.89);
add('react','js');
add(true,true);
add([10,20,30],[40,50,60]);
add('a','b');
// -----------------------------------------
function add(x, y) // x, y are input parameters
{
    console.log(' i am from add    ');
    console.log(x);
    console.log(y);
    console.log(x+y);
}

add(); // without any arguments - zero arguments istead of 2
       // a inputparameter without argument becomes undefined
       // undefined + undefined => NaN
// -------------------------------------------
function add(x, y) // x, y are input parameters
{
    console.log(' i am from add    ');
    console.log(x);
    console.log(y);
    console.log(x+y);
}

add(10); // with one argument instead of 2
         // for x value is 10
         // for y no arguments - so y becomes undefined
         // 10 + undefined => NaN
// ----------------------------------------------
function add(x, y) // x, y are input parameters
{
    console.log(' i am from add    ');
    console.log(x);
    console.log(y);
    console.log(x+y);
}

add(10,20,30,40); // with more arguments than requried
                 // for x value is 10
                 // for y 20
                 // for extra aguments 30, 40 no 
                 //input parameters to receive - overflow 
// ------------------------------------------------------------
function add(x, y,z,a) // x, y , z are input parameters
{
    console.log(' i am from add    ');
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(a);
    
}

add(10,true,['react','angular'],'javascript');
// -----------------------------------------------
function add()
{
    console.log('i am from add');
}
function add(x, y) // x, y are input parameters
{
    console.log(' i am from add(x,y)    ');
    console.log(x);
    console.log(y);
    
    
}
add(10,20); // always latest add definition is executed as response to 
add(); // calling statements
// ------------------------------------
// function definition first , calling statement next to it.
function add()
{
    console.log('i am from add');
}
add(); 
// --------------------------------
// function calling statement first, function definition is after the calling statement
add(); 
function add()
{
    console.log('i am from add');
}
// while running all definitions are moved to the top of the program logically.
// this is called function hoisting
// --------------------------------------
console.log(x);
var x = 10;
Note: undefined
// -------------------------
function Add(x, y)
{
    console.log(x+y);

}
Add(10,20);
sum = Add;
sum(40,50);
total = Add;
total(100,200);
// ------------------------

// Note: creation of functions
// a. by using function keyword - regular
// b. using functional expression
// c. using arrow function 
// -----------------------------
sum = function Add(x, y)
{
    console.log(x+y);

};
//Add(10,20); //  Add loses it's identity when a function definition is
              // added as a value to a variable
sum(40,50);
// ------------------------------
sum = function (x, y)
{
    console.log(x+y);

};
 // anonymous function definition is added as a value to a variable
sum(40,50);
// -------------------------------
sum = (x, y)=>{console.log(x+y);};
 // arrow function definition is added as a value to a variable
sum(40,50);
// -------------------
// 2nd May 2024
// -------------
var marks = [11,6,9,35,99,33,66,88,78,35,96,22];
console.log(marks);
console.log(marks.length);
console.log(marks.includes(35));
console.log(marks.includes(35,4));
console.log(marks.includes(35,10));
console.log(marks.includes(5));
// -----------------------------------
var products = ['apple','mango','cherry','blue berry','guva','orange'];
console.log(products.includes('mango'));
console.log(products.includes('Mango'));
console.log(products.includes('mango',10));
console.log(products.includes('pine-apple'));

// -----------------------------------------------
var products = ['apple','mango','cherry','blue berry','guva','mango','orange'];
console.log(products.indexOf('mango'));
console.log(products.indexOf('mango',2));
console.log(products.indexOf('mango',6));
console.log(products.indexOf('pine-apple'));
// ------------------------------------------------
var products = ['organic mango','jack','apple','mango','cherry','blue berry','guva','mango','orange'];
console.log(products.indexOf('mango')); // 1st occurrance from left side
console.log(products.indexOf('mango',(products.indexOf('mango')+1)));
console.log(products.indexOf('mango',(products.indexOf('mango',(products.indexOf('mango')+1))+1)));
console.log(products.indexOf('pine-apple'));
// --------------------------------------------------
var products = ['organic mango','jack','apple','mango','cherry','blue berry','guva','mango','orange'];
console.log(products.lastIndexOf('mango'));
console.log(products.lastIndexOf('mango',6));
console.log(products.lastIndexOf('mango',2));
// ----------------------------------------------
var marks = [11,6,9,35,99,33,66,88,78,35,96,22];
var result = marks.sort();
console.log(result);
// -----------------------
// Output:
// Note: sort method for numbers - sorts by considering first digit of each value.
//        this is not suitable for number sorting
// string based comparison on numbers not suitable for numbers
var marks = [11,6,9,35,99,33,66,88,0,78,35,96,22];

[11, 22, 33, 35, 35,6, 66, 78, 88,9,96, 99]
// -----------------------------------------------
var products = ['mango','cherry','blue berry','apple','guva','mango','Apple','orange'];
var result = products.sort();
console.log(result);
// --------------------------------------------
var marks = [11,6,9,35,99,33,66,88,0,78,35,96,22];
var result = marks.sort(comp)
function comp(a,b) 
{
    return a-b;
}
console.log(result);
// ---------------------------
var marks = [11,6,9,35,99,33,66,88,0,78,35,96,22];
var result = marks.sort(function comp(a,b) 
{
    return a-b;
})

console.log(result);
// ------------------------------
var marks = [11,6,9,35,99,33,66,88,0,78,35,96,22];
var result = marks.sort(function (a,b) 
{
    return a-b;
})

console.log(result);

// -----------------------------------
var marks = [11,6,9,35,99,33,66,88,0,78,35,96,22];
var result = marks.sort((a,b)=> 
{
    return a-b;
})

console.log(result);
