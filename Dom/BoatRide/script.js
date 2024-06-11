let cname = document.getElementById("name");
let Persons = document.getElementById("person");
let btype = document.getElementById("boattype");
let duration = document.getElementById("time")


let boatCount=0;

function getBoatCount(){
    let type = parseInt(btype.value);
    let noOfPersons = parseInt(Persons.value);
    let boatCount = noOfPersons/type;
    
    if(noOfPersons%type == 0 ){
        boatCount = parseInt(boatCount);
    }
    else if(noOfPersons%type >= 15 ){
        boatCount = parseInt(boatCount)+1;
    }
    else if(noOfPersons%type < 15 ){
        boatCount = parseInt(boatCount)+1;
    }
    return boatCount;
}
function getBoatPrice(count){
    let type = parseInt(btype.value);
    if(type <= 2){
        Price = count*240;
        // result.innerHTML = `hello ${Price} and ${count}`
    }
    else if(type <= 4){
        Price = count*260;
        // result.innerHTML = `hai ${Price} and ${count}`
    }
    else if(type <=8){
        Price = count*560;
        // result.innerHTML = `happy ${Price} and ${count}`
    }
    else if(type <=15){
        Price = count*990;
        // result.innerHTML = `hari ${Price} and ${count}`
    }
    return Price;
}

function calculateBill(Price){
    let time = parseInt(duration.value);
    tcost = Price*time;
    return tcost;
}
function bookRide(){
    event.preventDefault();
    let count = getBoatCount();
    let cost = getBoatPrice(count);
    let bill = calculateBill(Price);
    result.innerHTML = `You need to pay Rs.${bill}`
}