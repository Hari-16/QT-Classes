// ---------------------------------------
// 7th May 2024
// ---------------------------------------
//    Recursion : a function calling itself
//    caller and calee
//    finding the factorial using recursion
//    Stack Over Flow Error - Call Stack

   6
   x

   6*5*4*3*2*1

   6*5*4*3*2

   6*5*4*6

   6*5*24

   6*120

   720
  
// --------------------
function FindFact(x) // 6
{
    if(x == 1)
        return 1
    else
      return  x * FindFact(x-1)

}
var result = FindFact(6);
console.log(result);

// ----------------------------
x = 10; // available - accessable in the entire program
console.log('outside start of the program x : ' + x);
function f1()
{
    console.log('x inside f1 before modification : ' + x);
    x = 99;
    y = 20;
    console.log('x inside f1 after modification : ' + x);
    console.log('y inside the f1 y: ' + y);
}
f1();
console.log('x outside end of the program x: ' + x);
console.log('y outside end of the program y: ' + y);
// ----------------
// Note: outside x is available in f1
//       inside y is available outside 
// --------------------------------------------------------
var x = 10; // available - accessable in the entire program
console.log('outside start of the program x : ' + x); // 10
function f1()
{
    console.log('x inside f1 before modification : ' + x); // undefined
    var x = 99; // one more x is created locall to f1
    var y = 20; // y is created locally for f1
    console.log('x inside f1 after modification : ' + x); // 99
    console.log('y inside the f1 y: ' + y); // 20
}
f1();
console.log('x outside end of the program x: ' + x); // 10
console.log('y outside end of the program y: ' + y);  // ReferenceError: y is not defined
// -----------------------------------------------------------------------------------------
var x = 10; // available - accessable in the entire program
console.log('outside start of the program x : ' + x); 
var x = 100; // x refers to old x which is already created
console.log('outside start of the program x : ' + x); 
function f1()
{
    console.log('x inside f1 before modification : ' + x); 
    var x = 99; // one more x is created locall to f1
    var y = 20; // y is created locally for f1
    console.log('x inside f1 after modification : ' + x); 
    console.log('y inside the f1 y: ' + y); // 20
}
f1();
console.log('x outside end of the program x: ' + x); 
console.log('y outside end of the program y: ' + y);  
// Note: outside the f1 i.e  inside index.js or inside the function (local to function), whenever multiple variables are created using var with same name refers to same copy.
