// -------------------------------------------------------
// 29th April 2024
// ---------------
// array methods
//             shift(): Removes and Returns the value from top/start/first of the array.
//                      After removal array size gets reduced by one
//                      When array is empty , it returns undefined.

var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
console.log(marks.shift());
console.log('size ' + marks.length);
// --------------------------------------
var marks = [];
console.log(marks);
console.log('size ' + marks.length);
console.log(marks.shift());
console.log('size ' + marks.length);
// -----------------------------------
//            unshift() : inserts the given (value/values/...) at top/first/start position
//                        returns new size of the array.
var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
console.log('size after add ' + marks.unshift(4));
console.log(marks);
console.log('size ' + marks.length);
// ------------------------------------
var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
console.log('size after add ' + marks.unshift(1,2,3,4));
console.log(marks);
console.log('size ' + marks.length);
// -------------------------------------
var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
var student = [1001,'john','react','chennai'];
console.log('size after add ' + marks.unshift(student));
console.log(marks);
console.log('size ' + marks.length);
// --------------------------------------
// push() : same as unshift(), but place is different, appends at the end of the array.
var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
console.log('size after push : ' + marks.push(44));
console.log(marks);
console.log('size ' + marks.length);
// -----------------------------------------
var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
console.log('size after push : ' + marks.push(44,55,66));
console.log(marks);
console.log('size ' + marks.length);
// -------------------------------------
var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
var address = ['nunnambakam','chennai'];
console.log('size after push : ' + marks.push(address));
console.log(marks);
console.log('size ' + marks.length);
// ------------------------------------
// pop() : same as shift, but removes from end of the array.
var marks = [10,20,8,0,-6,44,6,33,['Hyd','TG']];
console.log(marks);
console.log('size ' + marks.length);
console.log('size after pop : ' + marks.pop());
console.log(marks);
console.log('size ' + marks.length);
// -------------------------------------------
var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
console.log('size after pop : ' + marks.pop());
console.log(marks);
console.log('size ' + marks.length);
// -------------------------------------
var marks=[];
console.log(marks);
console.log('size ' + marks.length);
console.log('size after pop : ' + marks.pop());
console.log(marks);
console.log('size ' + marks.length);
// --------------------------------------
// splice() : can be used to add /remove values at the required position on an array.
// splice() - as delete method
// ----------------
var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
var deletedValues = marks.splice(2,4);
console.log('result :' + deletedValues);
console.log('size of result :' + deletedValues.length);
console.log(marks);
console.log('size ' + marks.length);
// -------------------------------------
// splice() - as add/insert method - single value/ multiple values / array
// ----------------
var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
var deletedValues = marks.splice(2,0,22);
console.log('result :' + deletedValues);
console.log('size of result :' + deletedValues.length);
console.log(marks);
console.log('size ' + marks.length);
// -----------------------------------------
var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
var deletedValues = marks.splice(2,0,22,23,24,25,26,29);
console.log('result :' + deletedValues);
console.log('size of result :' + deletedValues.length);
console.log(marks);
console.log('size ' + marks.length);
// ----------------------------------------
var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
var student =[1001,'John','react','Hyd'];
var deletedValues = marks.splice(2,0,student);
console.log('result :' + deletedValues);
console.log('size of result :' + deletedValues.length);
console.log(marks);
console.log('size ' + marks.length);
// --------------------------------------
// splice() - as replace method
var marks = [10,20,8,0,-6,44,6,33];
console.log(marks);
console.log('size ' + marks.length);
var deletedValues = marks.splice(2,1,18);
console.log('result :' + deletedValues);
console.log('size of result :' + deletedValues.length);
console.log(marks);
console.log('size ' + marks.length);
