var marks = [35,75,29,52,80,85];
function Check(x)
{
    if(x>=35)
       return true;
    
    else 
       return false;
}
var result = marks.filter(Check);
console.log('your are passed marks: ' +result);
// console.log(result)
function fail(x)
{
    if(x<35)
       return true;
    
    else 
       return false;
}
var fail = marks.filter(fail);
console.log('your are Fail marks: ' +fail);

var sum = 0;
for(i=0;i<result.length;i++){
   sum += result[i];
}
console.log('Out of 600,Your obtained marks are: ' +sum);

