
let plus = document.getElementById("plu");
let minus = document.getElementById("minu");
let result = document.getElementById("result");
let tog = document.getElementById("tog")
let body = document.body;

let total=0;

plus.addEventListener("click",()=>{
    if(total <6){
    total = total +1;
    plus.hidden=false;
    minus.hidden=false;
    tog.hidden=false;
    result.textContent = "Increment Value is " + total;
    // if(total<7){plus.hidden=false;}
    }
    else{
        plus.hidden=true;
    // plus.disabled=true;
        // plus.setAttribute("disappear")
        // alert("You Reached Maximum Limit")
    }
})
minus.addEventListener("click",()=>{
    if(total>0){
    total = total-1;
    plus.hidden=false;
    minus.hidden=false;
    tog.hidden=false;
    result.textContent = "Decrement Value is " + total;
    }
    else{
        minus.hidden=true;
        tog.hidden=true;
        // alert("Invalid Entry, Please Add Atlest One Item")
    }
})

tog.addEventListener("click",()=>{
        body.classList.toggle('dark')
        // body.toggleAttribute("class",true)
        // body.style.backgroundColor="black";
        // body.style.color="white";
    // else{
    //     body.style.backgroundColor="white";
    //     body.style.color="black";
    // }
})
// wte.addEventListener("click",()=>{
//     body.style.backgroundColor="white";
//     body.style.color="black";
// })