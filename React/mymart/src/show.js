import {useState} from "react";
function Show()
{
    const [x,setX] = useState(0);
    // var x=0;
    function Display()
    {
        // x = x +1;
        setX(x+1);
        alert('x value from alert ' + x);
    }
    return(
        <div>
            <h1>x value {x} </h1>
            <input type="button" value="Show" onClick={Display} />
        </div>
    );
}
export default Show;
