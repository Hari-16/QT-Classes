
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let result = document.getElementById("result");
let total=0;

plus.addEventListener("click",()=>{
    if(total <6){
    total = total +1;
    result.textContent = "Increment Value is " + total;
    }
    else{
        alert("You Reached Maximum Limit")
    }
})
minus.addEventListener("click",()=>{
    if(total>0){
    total = total-1;
    result.textContent = "Decrement Value is " + total;
    }
    else{
        alert("Invalid Entry, Please Add Atlest One Item")
    }
})