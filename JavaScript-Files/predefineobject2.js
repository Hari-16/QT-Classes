// ----------------------------------------------------------------------------
// 10th May 2024
// -------------
// this : object  - object reference variable
//        - this refers to which object it depends on it's place.

// JavaScript this keyword

// What is JavaScript this keyword?
// The JavaScript this keyword refers to the current object. 
// It has different values, depending upon where it is defined or used  

// In a method, this refers to the owner of the method.
// Using Alone, this refers to the global object.
// Inside a function, this refers to the global object.
// Inside a function, with strict mode, this is undefined.
// Inside an event, this refers to the element that received the event.
// Inside the Methods like call(), and apply() can refer this to any object.

// inside the js
// ------------------------------------
// console.log('this inside js file ' + (this));
// this inside js file [object Object]
// ----------------------------------------
// function Show()
// {
//     console.log('this inside function show file ' + (this));
// }
// Show();
// this inside function show file [object global]
// ------------------------------------------------
// var Employee = {"Id":101, "Name":'John', "Designation":'Developer',
//                   "Department":'Solutions'};
// console.log(Employee);
// console.log(typeof(Employee));

// function Show(emp)
// {
//     console.log(emp.Id + '  ' + emp.Name + '  ' + emp.Designation + '  ' + emp.Department);
//     console.log('this inside function show file ' + (this));
// }
// Show(Employee);
// --------------------------------------------------------------
var Employee = {
                "Id":101, 
                "Name":'John', 
                "Designation":'Developer',
                "Department":'Solutions',
                "ShowEmployee":function()
                {
                    console.log(this.Id + '  ' + this.Name + '  ' + this.Designation + '  ' + this.Department);
                    console.log('this inside function show file ' + (this));
                }
                };
Employee.ShowEmployee();
// -------------------------------------------------------------------
// Call() method
// Syntax: functionName.call(thisArg, arg1, arg2, …);

// The call() method invoke a function by functionName with a specified 
// this value and arguments. 
// The first argument of the call() method thisArg is the value of this. 
// It allows you to set the this value with any given object. 
// The rest arguments of the call() method arg1, arg2,… are the arguments
//  of the function.

// When we call the function, the JavaScript engine invokes the call() 
// method of that function object.
// ----------------------------------
// apply() method
// The Function.apply() method allows you to call a function with given 
// this value and arguments provided as an array.

// Syntax: functionName.apply(thisArg, [args]);

// The apply() method accepts two arguments:

// The thisArg is the value provided to call to the function functionName.
// The args argument is an array that specifies the arguments of the function 
// fn. Since the ES5, the args argument can be an array-like object or
//  array object.


// Note: The apply() method is similar to the call() method except that it 
// takes the arguments of the function as an array instead of the individual 
// arguments.

// The call() & apply() method both can be used to call a method with 
// different object as an argument.
// --------------------------------------------------------
var Employee = {
                "Id":101, 
                "Name":'John', 
                "Designation":'Developer',
                "Department":'Solutions'
                };
var Customer = 
{
        "CustomerId":9001,
        "CustomerName":'Kiran',
        "Address":'Hyd',
        "Type":'Gold'
};

var Services = 
{
    "Show":function()
                {
                    console.log(this);
                    console.log('this inside function ShowEmployee - Services Ojbect ' + (this));
                }
}
Services.Show.call(Employee); // this of show refers to Employee 
                              // Employee.Show();

Services.Show.call(Customer); // this of show refers to Customer
                              //Customer.Show();
console.log('using apply method: ');
Services.Show.apply(Employee);
Services.Show.apply(Customer);
// -------------------------------------------------
// Check the last line
// -----------------------
var Employee = {
                "Id":101, 
                "Name":'John', 
                "Designation":'Developer',
                "Department":'Solutions'
                };
var Customer = 
{
        "CustomerId":9001,
        "CustomerName":'Kiran',
        "Address":'Hyd',
        "Type":'Gold'
};

var Services = 
{
    "Show":function()
                {
                    console.log(this);
                    console.log('this inside function ShowEmployee - Services Ojbect ' + (this));
                }
}


var f1 = Services.Show.call(Customer); 
var f2 = Services.Show.apply(Employee);
console.log(f1 + '    ' + f2);
// --------------------------------------
// he Bind() method in JavaScript
// The bind() method was introduced in ECMAScript 5. 
// It creates a new function, when called it has this which is set to 
// specific value.

// Syntax: functionName.bind(thisArg[, arg1[, arg2[, …]]])

// the bind() method returns a copy of the function functionName with 
// the specific this value (thisArg) and arguments (arg1, arg2, …).

// Unlike the call() and apply() methods, 
// the bind() method doesn’t execute the function immediately.
//  It only returns the function.

// The bind() method allows an object to take a method from another object
//  without making a copy of that method. 
// This is called function borrowing in JavaScript.
// -------------------------------------------------
var Employee = {
                "Id":101, 
                "Name":'John', 
                "Designation":'Developer',
                "Department":'Solutions'
                };
var Customer = 
{
        "CustomerId":9001,
        "CustomerName":'Kiran',
        "Address":'Hyd',
        "Type":'Gold'
};

var Services = 
{
    "Show":function()
                {
                    console.log(this);
                    console.log('this inside function ShowEmployee - Services Ojbect ' + (this));
                }
}


var f1 = Services.Show.bind(Customer); // Customer.Show()
var f2 = Services.Show.bind(Employee); // Employee.Show()
console.log(f1);
console.log(f2);
console.log('after bind');
console.log('calling f1: ');
f1();
console.log('calling f2');
f2();