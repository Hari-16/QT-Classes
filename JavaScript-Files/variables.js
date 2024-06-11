// ------------------------------
// 8th May 2024
// ------------------------------
// variables declaration using let
// let is ES6 standard

// let x = 10;  // accessable anywhere in the program
console.log('outside  x : ' + x);
function f1()
{
    console.log('inside f1 x : ' + x);
    x = 99;
    console.log('inside f1 after modification x : ' + x);
}
f1();
console.log('outside end of the program x :' +x);
// -----------------------------------------------------
// Example : creation of one more variable with same name by using let
let x = 10; // accessable anywhere in the program
console.log('outside  x : ' + x);
// let x = 199; // SyntaxError: Identifier 'x' has already been declared
function f1()
{
    console.log('inside f1 x : ' + x);
    x = 99;
    console.log('inside f1 after modification x : ' + x);
}
f1();
console.log('outside end of the program x :' +x);
// ----------------------------------------------------------------------
// let x = 10; // accessable anywhere in the program
// console.log('outside  x : ' + x); // program level - x - global
function f1()
{
   // console.log('inside f1 x : ' + x); // Reference Error - it looks for local x in f1
    let x = 99;
    console.log('inside f1  x : ' + x); // local x of f1 
}
f1();
console.log('outside end of the program x :' +x); // program level - x - global

// -----------------------------------------------------------------------------------
// Note : under any scope - program level/local to function - re-declaration of variable with same name using let
//  is an error : SyntaxError 
// let x = 10; // accessable anywhere in the program
// console.log('outside  x : ' + x); // program level - x - global
function f1()
{
   // console.log('inside f1 x : ' + x); // Reference Error - it looks for local x in f1
    let x = 99;
    console.log('inside f1  x : ' + x); // local x of f1 
    // let x = 199; //SyntaxError: Identifier 'x' has already been declared
}
f1();
console.log('outside end of the program x :' +x); // program level - x - global
// ---------------------------------------------------------

// Note : using var and let together : re-declartion using let under any scope is not possible leads to 
// error : SyntaxError - check the following code
// var x = 10;
// console.log('outside x :' +x);
// let x = 199; // SyntaxError: Identifier 'x' has already been declared
// console.log('outside x: ' +x);
function f1()
{
    var x = 100;
    console.log('inside f1 x :' +x);
    let x = 299; //SyntaxError: Identifier 'x' has already been declared
    console.log('inside f1 x :' +x);
}
f1();
console.log('outside end of the program x ' + x);
// ------------------------------------------------

// cosnt : is keyword using we can declare constants 

// 1 const fields must be declared and initialized at once/same line
// if not leads to error - check the following code
// ------------------------------------------------------
// const x; // SyntaxError: Missing initializer in const declaration
// console.log('x : ' + x);
// ------------------------------------------------------
// 2.const field value is not allowed to change.if tried leads 
// to error : TypeError: Assignment to constant variable.
// -----------------------------------------------------
// const x=99; 
// console.log('x : ' + x + '   ' + typeof(x));
// x = 199; // TypeError: Assignment to constant variable.
// console.log('x : ' + x + '   ' + typeof(x));
// -------------------------
// Note: declaration of const fields with same name but at different scopes is valid
// const x=99; // program level
// console.log('x : ' + x + '   ' + typeof(x));
function f1()
{
    const x = 199; //  this is at function level
    console.log('inside f1 x : ' +  x);
}
f1();
console.log('outside x : ' +  x);
// ---------------------------------------
{
const x = 10;
console.log('x : ' + x);
//-----------------------------------
}
// const x = 99;
// console.log('x : ' + x);
// ----------------------------
// const x = 10; // lower case x
// console.log('x : ' + x);

// const X = 99; // upper case x
// console.log('x : ' + x);
// ---------------------------
// var a =10;
// var b = 20;
// const x = a+b; 
// console.log('x : ' + x);
// ----------------------------
// const a =10;
// const b = 20;
// const x = a+b; 
// console.log('x : ' + x);
// // ---------------------------
// const a =10;
// var b = 20;
// const x = a+b + 'i am constant'; 
// console.log('x : ' + x);
// -----------------------------------
// this: keyword
//       refers to object
//       this refers to whom , depends upon the place of 'this'
// index.js
// ---------
console.log(this); // {}
function f1()
{
    console.log(this); // global
}
f1();
