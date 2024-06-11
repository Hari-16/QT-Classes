x = 10;
y = 10;
if(x<y)
{
    console.log(x + ' is less than ' + y);
}
else if(x == y)
{
    console.log(x + ' is equal to ' + y);
}
else if(x > y)
{
    console.log(x + ' is greater than '+y);
}
// ----------------------------------------
x = 20;
y = 10;
if(x<y)
{
    console.log(x + ' is less than ' + y);
}
else if(x == y)
{
    console.log(x + ' is equal to ' + y);
}
else
{
    console.log(x + ' is greater than '+y);
}
// -----------------------------------------
//userType = "admin";
userType = "vendor";
//userType = "employee";
//userType = "customer";
//userType = "guest";
switch(userType)
{
    case "admin":
        console.log("load admin menu");
        break;
    case "customer":
        console.log("load customer menu");
        break;
    case "vendor":
        console.log("load vendor menu");
        break;
    case "employee":
        console.log("load employee menu");
        break;
    default:
        console.log("invalid user type..check once");
        break;
}
// -------------------------------------
//userType = "admin";
userType = "Admin";
switch(userType)
{
    case "admin":
        console.log("load admin menu");
        break;
    case "customer":
        console.log("load customer menu");
        break;
    case "vendor":
        console.log("load vendor menu");
        break;
    case "employee":
        console.log("load employee menu");
        break;
    default:
        console.log("invalid user type..check once");
        break;
}
// ---------------------------------------
//userType = "admin";
var userType = "Admin";
console.log(userType + '    ' + typeof(userType));
userType = userType.toLowerCase();
switch(userType)
{
    case "admin":
        console.log("load admin menu");
        break;
    case "customer":
        console.log("load customer menu");
        break;
    case "vendor":
        console.log("load vendor menu");
        break;
    case "employee":
        console.log("load employee menu");
        break;
    default:
        console.log("invalid user type..check once");
        break;
}
// --------------------------------------------------------
//x = 10;
x = 65;
switch(x)
{
    case 10:
        console.log('x is ten');
        break;
    case x>=35: // 65>=35 -> true  case true
        console.log('x is greater than or equal to 35');
        break;
    case x<35: // 65<35 --> false case false
        console.log('x value is less than 35');
        break;
    default:
        console.log('invalid x value check once');
        break;
}
// ------------------------------------------------------
marks = 10;
//marks = 65;
switch(true)
{
    
    case marks>=35: // 65>=35 -> true  case true
                    // 10>=35 -> false  case false
        console.log('pass');
        break;
    case marks<35: // 65<35 --> false case false
                   // 10<35 --> true  case true
        console.log('fail');
        break;
    default:
        console.log('invalid marks value check once');
        break;
}
