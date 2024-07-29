import { useEffect } from "react";

function Slider()
{
    useEffect(()=>{
        // alert('i am from Slider');
        console.log('i am from Slider');
    })
    return(
        <div>
            <h4>Version 1</h4>
            <h4>using alert</h4>
            <h1>I am Slider</h1>
        </div>
    )
}
export default Slider;
