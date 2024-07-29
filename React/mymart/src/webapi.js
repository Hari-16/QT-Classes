import { useEffect } from "react";

function GetProduct(){
    var req= fetch('http://fakestoreapi.com/products',{
        method:'Get'
    });
    req.then((res)=>{console.log(res)})
}
// useEffect(()=>{
//     GetProduct(); 
// },[])
export default GetProduct;