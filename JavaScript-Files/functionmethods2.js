// --------------
// 6th May 2024
// --------------
var marks = [11,6,9,35,99,33,66,88,30,0,78,90,35,96,22];
function Check(x)
{
    if(x>=35)
       return true;
    else 
       return false;

}
var result = marks.filter(Check);
console.log(result);

output: [ 35, 99, 66, 88, 78, 90, 35, 96 ]
// --------------------------------------------
var marks = [11,6,9,35,99,33,66,88,30,0,78,90,35,96,22];
function Check(x)
{
    if(x<35)
       return true;
    else 
       return false;

}
var result = marks.filter(Check);
console.log(result);

oupput: [ 11, 6,  9, 33, 30, 0, 22 ]
// -----------------------------------------
var marks = [11,6,9,35,99,33,66,88,30,0,78,90,35,96,22];
function Check(x)
{
    if(x%2==0)
       return true;
    else 
       return false;

}
var result = marks.filter(Check);
console.log(result);
output : [ 6, 66, 88, 30, 0, 78, 90, 96, 22 ]
// -----------------------------------------------
var marks = [11,6,9,35,99,33,66,88,30,0,78,90,35,96,22];
function Check(x,i)
{
    if(x%2==0)
    {
        console.log(x + ' is at ' + i);
       return true;
    }
    else 
    {
        console.log(x + ' is at ' + i);
       return false;
    }

}
var result = marks.filter(Check);
console.log(result);
// -----------------------------------------
var marks = [11,6,9,35,99,33,66,88,30,0,78,90,35,96,22];
function Check(x,i,r)
{
    if(x%2==0)
    {
       // console.log(x + ' is at ' + i);
       console.log(r);
       return true;
    }
    else 
    {
       // console.log(x + '  ' + i);
       console.log(r);
       return false;
    }

}
var result = marks.filter(Check);
console.log('result ' + result);
// ------------------------------------
// call back

function UpdateToManager(Id,Name,Message)
{
    console.log('Employee Id ' + Id + ' Name : ' + Name + ' Updated On ' + new Date() + '  ' + Message)
}
function Employee(UpToM)
{
    for(i = 1; i<=20;i++)
    {
        console.log("employee task: " + i);
    }
    UpToM(1001,'John','Task Completed');
}

Employee(UpdateToManager);
// --------------------------------------
// inner function - outter function - Clouser
// --------------------------------
function f1()
{
    x =10;
    y = 20;
    function Sum()
    {
        s = x + y;
        return 'From Sum - x : ' + x + ' y : ' + y + ' s: ' + s;
    }
    return Sum(); // calling Sum() to execute
}

var result = f1();
console.log(result);
// --------------------------------------
function f1()
{
    x =10;
    y = 20;
    function Sum()
    {
        s = x + y;
        return 'From Sum - x : ' + x + ' y : ' + y + ' s: ' + s;
    }
    return Sum;  // returns function definition
}

var result = f1();
console.log('inside result : ' + result);
var r = result(); // calls Sum()
console.log(r);
// ------------------------------------
// Self Inovking 
(function (x, y)
{
    console.log(x+y);
})(10,20);


(function (x, y)
{
    console.log(x+y);
})(100,200);
