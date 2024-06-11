let Name = document.getElementById("name");
let vegadt = document.getElementById("vegAdt");
let vegkid = document.getElementById("vegkid");
let nonvegadt = document.getElementById("nonvegadt");
let nonvegkid = document.getElementById("nonvegkid");



function person(){
    let adt = parseInt(vegadt.value);
    let kid = parseInt(vegkid.value);
    let nonveg = parseInt(nonvegadt.value);
    let nonkid = parseInt(nonvegkid.value);
    
    let noofpersons =0;
        if(adt == adt){
            noofpersons= adt;
        }
        if(kid == kid){
            noofpersons=noofpersons+kid
        }
        if(nonveg == nonveg){
            noofpersons=noofpersons+nonveg
        }
        if(nonkid == nonkid){
            noofpersons=noofpersons+nonkid
        }
            return noofpersons
}

function calculation(){
    let adt = parseInt(vegadt.value);
    let kid = parseInt(vegkid.value);
    let nonveg = parseInt(nonvegadt.value);
    let nonkid = parseInt(nonvegkid.value);
    
    let price =0;
    if(adt == adt){
        price = adt*599;
    }
    if(kid == kid){
        price = price + kid*249
    }
    if(nonveg == nonveg){
        price = price + nonveg*699
    }
    if(nonkid == nonkid){
        price = price + nonkid*349
    }
        return price
}

function gst(price){
    let totalcost = price+(price*(12/100));
    return totalcost
}
function dis(sum){
    let discount = sum - (sum*(10/100));
    return discount;    
}


function bill(){
    event.preventDefault();
    let cname = Name.value;
    let cost = calculation();
    let countperson = person();
    let gstprice = gst(cost);
    let totalbill = dis(gstprice);

    if(countperson>=10){
        result.innerHTML = `Hai ${cname},You have to pay Rs.${totalbill}. Thanks for coming!!!`
    }
    else{
        result.innerHTML = `Hai ${cname},You have to pay Rs.${gstprice}. Thanks for coming!!!`
    }
}
