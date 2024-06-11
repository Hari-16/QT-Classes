let x = [20,5,26,54,16];
var result = x.sort(comp);
function comp(a,b) 
{
    return a-b;
}
console.log(result);
console.log('Smallest value of given number is: ' +x[0]);
console.log('greatest value of given number is: ' +x[x.length-1]);
