var x = "India";
    // if(x === "India" || x === "india"){
    //     console.log("your are an Indian");
    // }
    // else{
    //     console.log("not an indian, he/she is from " + x);
    // }

    let cty = document.getElementById("two");
    function city(){
        event.preventDefault();
        let city = cty.value
        if(city === "India" || city === "india"){
            citi.innerHTML = `Your are an Indian`
        }
        else{
            citi.innerHTML = `Your are not an Indian,He/She is from ${city}`
        }
    }