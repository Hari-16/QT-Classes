let Name = document.getElementById("name");
let mobile = document.getElementById("mobile");
let address = document.getElementById("address");
let type = document.getElementById("type");
let cleaning = document.getElementById("cleaning");
let repair = document.getElementById("repair");
let gas = document.getElementById("gas");
let relocation = document.getElementById("relocation");
let filter = document.getElementById("filter");
let maintenance = document.getElementById("maintenance");

function totalservice(){
    let count =0;
    if(cleaning.checked){
        count ++;
    }
    if(repair.checked){
        count ++;
    }
    if(gas.checked){
        count ++;
    }
    if(relocation.checked){
        count ++;
    }
    if(filter.checked){
        count ++;
    }
    return count;
}
function sum(){
    let sum = 0;
    if(cleaning.checked){
        sum = sum + parseInt(cleaning.value);
    }
    if(repair.checked){
        sum = sum + parseInt(repair.value);
    }
    if(gas.checked){
        sum = sum + parseInt(gas.value);
    }
    if(relocation.checked){
        sum = sum + parseInt(relocation.value);
    }
    if(filter.checked){
        sum = sum + parseInt(filter.value);
    }
    return sum;
}
function dis(sum){
    let discount = sum - (sum*(15/100));
    return discount;    
}

function totalcost(){
    event.preventDefault();
    let Service= totalservice();
    let bill = sum();
    let person = Name.value;
    let servicetype = type.value;
    if(Service>=2){
        bill = dis(bill);
    }
    if(maintenance.checked){
        booking.innerHTML= `${person} Your Booking for ${servicetype} Ac Service is Successful!`
        result.innerHTML=`The Estimated Service Cost with Maintance is Rs.${bill}`        
    }
    else{
        booking.innerHTML= `${person} Your Booking for ${servicetype} Ac Service is Successful!`
        result.innerHTML=`The Estimated Service Cost is Rs.${bill}`        
    }
}