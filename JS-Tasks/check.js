// var x= 16;
// if (x > 0) {
//     console.log("The number is positive and value = " + x);
// }
// else if (x < 0) {
//     console.log("The number is negative " + x);
// }
// else {
//     console.log("The number is zero "+ x);
// }

let input = document.getElementById("one");
function check(){
    event.preventDefault();
    let x = parseInt(input.value)
    if (x > 0) {
        pos.innerHTML = `The number is positive and value ${x}` 
    }
    else if (x < 0) {
        pos.innerHTML = `The number is negative and value ${x}` 
    }
    else {
        pos.innerHTML = `The number is Zero` 
    
    }
}