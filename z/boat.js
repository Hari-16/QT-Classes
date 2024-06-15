// let name = document.getElementById("cname");
// let Persons = document.getElementById("noOfPersons");
// let type = document.getElementById("btype");
// let duration = document.getElementById("time");
// //let result = document.getElementById("result");
// //result.innerHTML = "You need to pay RS." + total;

// let boatCount=0;

// function getBoatCount() {
//     let btype = parseInt(type.value);
// let noOfPersons= parseInt(Persons.value);
//   let  boatCount=noOfPersons/btype;
//   if(noOfPersons%btype==0)
//     {
//         boatCount=parseInt(boatCount);
//     }
//     else if(noOfPersons%btype>=15)

//     {
    
//         boatCount=parseInt(boatCount)+1;

//     }
//     else if(noOfPersons%btype<15)

//         {
        
//             boatCount=parseInt(boatCount)+1;
    
//         }
//         return boatCount;
//     }
//     function getBoatPrice(count)
//     {
//         let btype =parseInt(type.value);
//         if(btype<=2)
//             {
//                Price=count*240;
//             }
//      else if(btype<=4)
//                 {
//                     Price=count*260;
//                 }
//      else if(btype<=8)
//                     {
//                         Price=count*560;
//                     }
//      else if(btype<=15)
//            {
//              Price=count*990
//           }
//          return Price;
//     }
//     function calculateBill(Price)
//     {
//    let time= parseInt(duration.value);
//    tcost=Price*time;
//    return tcost;
// }
   
//         function boatride()
//      {
//         event.preventdefault();
//         let count = getBoatCount();
//         let cost=getBoatPrice(count);
//         let bill=calculateBill(price);
//         result.innerHTML = `You need to pay Rs.${bill}`
//      }



// let name = document.getElementById("cname");
// let Persons = document.getElementById("noOfPersons");
// let Btype = document.getElementById("btype");
// let Duration = document.getElementById("duration");


// let boatCount=0;

// function getBoatCount() {
//     let btype = parseInt(Btype.value)
//     let noOfPersons= parseInt(Persons.value)
//     let  boatCount=noOfPersons/btype;
//   if(noOfPersons%btype==0)
//     {
//         boatCount=parseInt(boatCount);
//     }
//     else if(noOfPersons%btype>=15)
//     {
    
//         boatCount=parseInt(boatCount)+1;

//     }
//     else if(noOfPersons%btype<15)
//         {
        
//             boatCount=parseInt(boatCount)+1;
    
//         }
        
//         return boatCount;
//     }
    
            
//     function getBoatPrice(bcount)
//     {
//         let type =parseInt(Btype.value);
//         if(type<=2)
//             {
//                price=bcount*240;
//             }
//      else if(type<=4)
//                 {
//                     price=bcount*260;
//                 }
//      else if(type<=8)
//                     {
//                         price=bcount*560;
//                     }
//      else if(type<=15)
//            {
//              price=bcount*990
//           }
//          return price;
//     }
//     function calculateBill(price)
//     {
//    let time = parseInt(Duration.value);
//    total=price*time;
//    return total;
// }
// function boatRide()
//      {
//         event.preventdefault();
//         let bcount= getBoatCount();
//         let res=getBoatPrice(bcount);
//         let res1=calculateBill(price);
//         result.innerHTML = `You need to pay rs.${res1}`
//      }
        
        
function BookRide(){
    event.preventDefault();
    var cname=document.getElementById("cname");
    var phonenumber=document.getElementById("phno").value;
    var Email=document.getElementById("email");
    var noOfPersons=document.getElementById("noOfPersons").value;
    var btype=document.getElementById("btype").value;
    var duration=document.getElementById("duration").value;
    var BookRide=document.getElementById("BookRide");
    var boatCount=getBoatCount(btype,noOfPersons);
    let baotPrice= boatPrice(btype,boatCount);
    var total=caliculatebill(boatPrice,duration);
    var result=document.getElementById("result");
    result.innerHTML="you need to pay"+parseInt(total);
    }
    function getBoatCount(btype,noOfPersons)
    {
        if(btype=="2 seater boat")
       {
        if(noOfPersons%2===0){
            return (parseInt(noOfPersons/2));
        }
    // else{
    //     return (parseInt((noOfPersons/2)+1));
    //     }
    
        }
        if(btype=="4 seater boat")
            {
             if(noOfPersons%4===0){
                 return (parseInt(noOfPersons/4));
             }
        //  else{
        //      return (parseInt((noOfPersons/4)+1));
        //      }
         
             }
             if(btype=="8 seater boat")
                {
                 if(noOfPersons%8===0){
                     return (parseInt(noOfPersons/8));
                 }
            //  else{
            //      return (parseInt((noOfPersons/8)+1));
            //      }
             
                 }
                 if(btype=="15 seater boat")
                    {
                     if(noOfPersons%15===0){
                         return (parseInt(noOfPersons/15));
                     }
                 else{
                     return (parseInt((noOfPersons)+1));
                     }
                 
                     }
             
    }
    function boatPrice(btype,boatCount)
    {
        if(btype="2 seater boat")
            {
                return (boatCount*240);
            }
            if(btype="4 seater boat")
            {
                return (boatCount*260);
            }
            if(btype="8 seater boat")
            {
                return(boatCount*560);
            }
            if(btype="15 seater boat")
                {
                    return (boatCount*990);
                }
    }
    function caliculatebill(boatPrice,duration)
    {
    var total= (boatPrice* duration);
    return result.innerHTML="you need to pay in RS."+total;
    }
    