// iterative control structures
//      1.while
//      2.for
//      3.do..while
//      4.for in
//                 - logic reusability 
//                 - avoids duplicatioin of the code
//                 - execution of one or more statements again again based on a condition.


// declation and initialization of looping variable
// condition
// change in the looping variable value -(to make condition false)

// 1.while

x = 1;
while(x<=10)
{
   console.log(x + ' inside the while ' + (x<=10)); 
   x = x + 1; // x++
}
console.log(x + ' outside the while ' + (x<=10)); 
// ----------------------------------------------------
// for
// ---
for(x = 1;x<=10;x = x + 1)
{
   console.log(x + ' inside the for ' + (x<=10)); 
}
console.log(x + ' outside the for' + (x<=10)); 
// ---------------------------------------------
x = 1;
for(;x<=10;)
{
   console.log(x + ' inside the for ' + (x<=10)); 
   x = x + 1;
}
console.log(x + ' outside the for' + (x<=10)); 
// ------------------------------------------------
x = 1;
for(;;)
{
   console.log(x + ' inside the for ' + (x<=10)); 
   if(x==10)
     break;
   x = x + 1;
}
console.log(x + ' outside the for' + (x<=10)); 
// -----------------------------------------------
// do..while
// ---------
x = 1;
do
{
   console.log(x + ' inside the do..while ' + (x<=10)); 
   x = x + 1;
}while(x<=10);
console.log(x + ' outside the for' + (x<=10)); 
// ------------------------------------------
x = 11;
do
{
   console.log(x + ' inside the do..while ' + (x<=10)); 
   x = x + 1;
}while(x<=10);
console.log(x + ' outside the for' + (x<=10)); 
// -------------------------------------------------
// for..in
// -------
//        : to execute one task on each value of the collection
marks = [45,56,23];
console.log(marks);
console.log(marks[0]);
console.log(marks[2]);
marks[2] = 99;
console.log(marks[2]);
for(i in marks)
{
   console.log(i  + '   ' + marks[i]);
}
