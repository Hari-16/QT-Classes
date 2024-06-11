// Arithmetic Operators 
// + - * / %  **

x = 10;
y = 2;
z = 3;
console.log(x+y); // 12
console.log(x-y); // 8
console.log(x*y); // 20
console.log(x/y); // 5
console.log(x%y); // 0
console.log(x%z); // 1 
console.log(x**y); // 100
// -----------------------------
// expression -  is a collection operator and operands
//   x+y - Arithmetic expression
//       + : operator
//      x , y : operands
//      binary operator :here + working on two operands 

//      unary operator : a operator which uses one operand
//     + -  sign operators  - positive  , negative 

//     x = +6;
//     y = -8;

// ------------------------
// short cut operators 
// arithmetic operators with assignment operator =

x = 10;
x = x +2;
console.log(x);
// ---------------
x = 10;
x += 2;
console.log(x);
// ----------
x = 10;
x -= 2; // x = x -2
console.log(x);
// -----------
x = 10;
x *= 2; // x = x *2
console.log(x);
// ---------------
x = 10;
x /= 2; // x = x /2
console.log(x);

// ---------------------
x = true;
y = true;
z = false;
console.log(x+y);
console.log(x+z);
// ---------------------
console.log(10+true);
console.log(10+false);
// ------------------------
x = 10+true;
y = 10+"javascript"; // anything +string returns string
console.log(x + "   " + typeof(x));
console.log(y + "   " + typeof(y));
// ----------------------------------
// relative operators 
//            >
//            <
//            >=
//            <=
//            ==
//            ===
//            !=

// Note : output of  relative expression is always boolean
x = 10;
y = 2;
z = 10;
console.log(x>y); // true
console.log(x>z); // false
console.log(x>=z); //true
console.log(x<y); // false
console.log(x<z); // false
console.log(x<=z); // true
console.log(x == y); // false
console.log(x == z); // true
console.log(x != y); // true
console.log(x != z); // false
// ------------------------------
x = 10;
y = 10;
z = '10';
console.log(x + "  " + typeof(x) + "  " + y + "  " + typeof(y) + "  " + (x==y));
console.log(x + "  " + typeof(x) + "  " + z + "  " + typeof(z) + "  " + (x==z));
console.log(x + "  " + typeof(x) + "  " + z + "  " + typeof(z) + "  " + (x===z));
// ------------------------------------------------------------------------------------
console.log(true == true);
console.log(true == false);
console.log(true>false);
console.log(true == 1);
console.log(false == 0);
// --------------------------
console.log("java" == "java");
console.log("java" == "Java");
// --------------------------------
console.log("java" == 'java');
// ------------------------------
console.log(10 == 'java');
console.log(10 == '10');
console.log(10 === '10');
// ---------------------------
// logical operators 
//          && - and
//          || - or
//           ! -  not

// && || are used to join mulitple conditions(expressions) together as one unit.

// && - returns true when all the joined condtions returns true.

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// || - returns true, when atleast on condition's result is true.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// --------------------------------
// ! - returns -opposite of the result.
console.log(true );
console.log(false);
console.log(!true );
console.log(!false);
// ------------------------------
console.log(1 && 1);
console.log(true && 0);
console.log(0 && true);
console.log(false && 0);
// -------------------------
console.log(1);
console.log(0);
console.log(!1);
console.log(!0);
